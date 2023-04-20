// component for the tracker form that is used to add a new school to the track and add all the information about the school to the database
// this component is used in the Tracker.js component

import React, { useState } from 'react';
import classes from './TrackerForm.module.css';
const TrackerForm = () => {
  const done = e => {
    e.preventDefault();
    console.log(e.target.ttt.value);
  };
  return (
    <div className={classes.contaner}>
      <form className={classes.form} onSubmit={done}>
        <div className={classes.field}>
          <h4>بيانات المدرسه</h4>
          <div className={classes.inputs}>
            <div className='input-label'>
              <label htmlFor=''>الرقم التعريفي</label>
              <input id='schoolInf_id' type='text' />
            </div>
            <div className='input-label'>
              <label htmlFor=''>المرحله</label>
              <input id='schoolInf_level' type='text' />
            </div>
            <div className='input-label'>
              <label htmlFor=''>اسم المدرسه</label>
              <input id='schoolInf_name' type='text' />
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>شئون طلبة</h4>
          <h5>الطلبه</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الحاضر</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>المقيد</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>الصف الثالث</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الحاضر</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>المقيد</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>الصف الثاني</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الحاضر</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>المقيد</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>الصف الاول</h6>
            </div>
          </div>
          <h5>التحويلات</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير منضبط</label>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> منضبط</label>
              </div>
              <h6>ملفات التحويل</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الي</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>من</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>شئون عاملين</h4>
          <h5>عاملين</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الحاضر</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>المقيد</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
            </div>
          </div>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> نعم</label>
              </div>

              <h6> يوجد سلبيه</h6>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الامن و السلامه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير منضبط</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> منضبط</label>
                <h6> عوامل خارجيه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير منضبط</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> منضبط</label>
                <h6> سور</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير منضبط</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> منضبط</label>
                <h6> مبني</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير منضبط</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> منضبط</label>
                <h6> حجرات</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير منضبط</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> منضبط</label>
                <h6> معامل</h6>
              </div>
            </div>
          </div>
          <h5>عوامل الامن</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير صالح</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> صالح</label>
                <h6> طفايات</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير صالح</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> صالح</label>
                <h6> جرادل</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير صالح</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> صالح</label>
                <h6> خزانات</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> غير صالح</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> صالح</label>
                <h6> خط حريق</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>التغذيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> شهاده صحيه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> انضباط التوزيع</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> يتم التوزيع بشكل يومي</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> يتم الاستلام بشكل يومي</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> لا يتم التخزين لفترات</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الجمعيه التعاونيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للارباح</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للتشغيل </h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> الاصناف الموجوده مصرح بيها</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الجوده</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للارباح</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للتشغيل </h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> الاصناف الموجوده مصرح بيها</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>التدريب</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> مفعله </h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> تدريب المعلمين</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>المعامل</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input placeholder='0' id='schoolInf_level' type='number' />
                </div>
                <h6> Tilo</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input placeholder='0' id='schoolInf_level' type='number' />
                </div>
                <h6> تطور</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input placeholder='0' id='schoolInf_level' type='number' />
                </div>
                <h6> حاسب الي</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input placeholder='0' id='schoolInf_level' type='number' />
                </div>
                <h6> شبكات</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input placeholder='0' id='schoolInf_level' type='number' />
                </div>
                <h6> اتحاد اوري</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد اعطال</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد اعطال</label>
                <h6> صلاحيه العمل</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>المعلمين</h4>
          <h5>المواد</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الامركزيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> الصرف</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> التسويه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> لجنه الامركزيه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> محضر اجتماع مجلس الامناء</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> الالحاق</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الوحده المنتجه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> معتمد من التوجيه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> تم تفعيل النشاط</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> التوريد</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> توزيع الارباح</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>التخطيط الاستراتيجي</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> يوجد تشكيل فريق</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> يتم تفعيل الانشطه حسب الخطه الزمنيه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> معوقات تطبيق</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> يوجد تحليل للوضع الراهن</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>التخطيط الاستراتيجي</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه للفحص الطبي</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه للتشخيص الطبي</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> ملف عن الوضع الصحي</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> الإجراءات الصحيه في دورات المياه</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> الإجراءات الصحيه في المعامل</h6>
              </div>
              <div className={classes.input}>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> انشطه البيئه و السكان</h6>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrackerForm;
