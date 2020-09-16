import {Request, Response} from 'express';
import knex from '../database/connection';

import convertHourToMinutes from '../utils/CovertHoursToMinutes';

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
};

class ClassesController {

  async index(req: Request, res: Response) {
    const filters = req.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if(!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: 'Missing Filters to search'
      });
    }

    const timeInMinutes = convertHourToMinutes(filters.time as string);

    const classes = await knex('classes')
      .whereExists( function () {
        this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id') 
      .select(['classes.*', 'users.*'])
    ;   

    return res.status(201).json(classes);
  };
 
  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body;

    const trx = await knex.transaction();

    try {
      const insertedUsersId = await trx('users').insert({
        name, avatar, whatsapp, bio
      });
  
      const user_id = insertedUsersId[0];
  
      const insertedClassesId = await trx('classes').insert({
        subject, cost, user_id
      });
  
      const class_id = insertedClassesId[0];
  
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id,
        };
      });
  
      await trx('class_schedule').insert(classSchedule);
  
      await trx.commit();
  
      return res.status(201).json({
        succes: "Created Succesfully"
      });    

    } catch (err) {
      await trx.rollback();
      console.log(err);
      return res.status(400).json({
        error: "Unexpected error while creating new class!"
      });
    };

  };
};

export default ClassesController;