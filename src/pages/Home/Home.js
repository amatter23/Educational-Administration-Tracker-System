import React, { useState } from 'react';
import classes from './Home.module.css';
import homeImage from '../../../src/assits/home.png';
import icone from '../../../src/assits/management.png';
import GenralGoal from '../../../src/assits/genralGoal.png';
import Goal from '../../../src/assits/goal.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [activeItemIndex, setActiveItemIndex] = useState('general');
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <NavLink to='/login' className={classes.loginBtn}>
            <FontAwesomeIcon icon={faRightToBracket} />
            <h5>{t('Login')}</h5>
          </NavLink>
        </div>
      </div>
      <div
        style={{ backgroundColor: 'var(--primary-darker)' }}
        className={`${classes.Home} ${classes.window}`}
      >
        <div className={classes.title}>
          <div className={classes.text}>
            <h5>جامعة الفيوم</h5>
            <h5>كلية التربية</h5>
            <h5>قسم الإدارة التربوية وسياسات التعليم</h5>
            <h3>
              برنامج مقترح لتحسين العمليات الإدارية بالادارات التعليمية بمحافظة
              الفيوم على ضوء الإدارة الإلكترونية
            </h3>
          </div>
          <div className={classes.image}>
            <img width={'100%'} src={homeImage} alt='home' />
          </div>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.cardTitle}>
              <h5>الباحثة</h5>
            </div>
            <div className={classes.cardBody}>
              <h6>
                <span> استاذة/ </span>
                غادة زكريا محمود
              </h6>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardTitle}>
              <h5>أستاذ الإدارة التربوية وسياسات التعليم المتفرغ</h5>
            </div>
            <div className={classes.cardBody}>
              <h6>
                <span>دكتور/ </span>
                يوسف عبد المعطي{' '}
              </h6>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardTitle}>
              <h5>أستاذ الإدارة التربوية وسياسات التعليم المساعد</h5>
            </div>
            <div className={classes.cardBody}>
              <h6>
                <span> دكتورة/ </span>
                سميحة على مخلوف{' '}
              </h6>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardTitle}>
              <h5>مدرس تكنولوجيا التعليم بكلية التربية النوعية جامعة الفيوم</h5>
            </div>
            <div className={classes.cardBody}>
              <h6>
                <span> دكتورة/ </span>
                سالي احمد على صلاح
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: 'var(--primary-darker)' }}
        className={`${classes.objective} ${classes.window}`}
      >
        <div className={classes.goals}>
          <div className={classes.circel}></div>
          <div className={classes.header}>
            <h3>{t('Goal')}</h3>
          </div>
          <div className={classes.triger}>
            <div
              className={`${classes.trigerItem1} ${
                activeItemIndex === 'goal' ? classes.checked : ''
              }`}
              onClick={() => {
                setActiveItemIndex('goal');
              }}
            >
              <h6>{t('Goal')}</h6>{' '}
            </div>
            <div
              className={`${classes.trigerItem2} ${
                activeItemIndex === 'general' ? classes.checked : ''
              }`}
              onClick={() => {
                setActiveItemIndex('general');
              }}
            >
              <h6>{t('General goal')}</h6>{' '}
            </div>
          </div>
          <div
            style={
              activeItemIndex === 'goal'
                ? { gridTemplateColumns: ' 1fr 1fr 1fr' }
                : { gridTemplateColumns: '1fr 1fr' }
            }
            className={classes.body}
          >
            {activeItemIndex === 'goal' ? (
              <>
                <div className={classes.bodyList}>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      توزيع كافة نتائج المتابعة مصنفة الكترونيًا حسب الأقسام
                      تمهيدًا لإتخاد الإجراء اللازم حيال النتائج المختلفة
                    </h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      التواصل الآني مع جميع الأقسام للإخطار بنتائج المتابعة
                      الميدانية تمهيدًا لسرعة الاستجابة بإتخاد الإجراء المناسب
                    </h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      تحقيق سرعة الاستجابة لحل المشكلات التي يمكن أن تعيق العمل
                      بصورة آنية من خلال القيادات التنفيدية
                    </h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      حصر المعوقات الخارجة عن نطاق اختصاص التنفيدين لوضعها في
                      أولويات التخطيط التشغيلي بالإدارة
                    </h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      حصر المدارس التي تم تدوين سلبيات بها والتي لم يتم اتخاد
                      اجراء تصحيحي حيالها بكل قس
                    </h6>
                  </div>
                </div>
                <div className={classes.bodyList}>
                  <img width={'100%'} src={Goal} alt='home' />
                </div>
                <div className={classes.bodyList}>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      حصر المدارس التي تم تدوين سلبيات بها وتم اتخاد اجراء
                      تصحيحي حيالها بكل قسم
                    </h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      حصر المدارس المتميزة في الأداء والمحققة للمعايير الحاكمة
                      للجودة لتحسين مستوى الأداء بها
                    </h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      حصر مديرين المدارس المتميزين ممن ادرجت مدارسهم ضمن المدارس
                      المتميزة في الأداء
                    </h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>تجميع خطط الأقسام المختلفة لبناء خطة الإدارة</h6>
                  </div>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      ارسال خطة الإدارة مجمعة من كل الأقسام لمدير الإدارة
                      للتعديل عليها وارسالها مجمعة لأقسام
                    </h6>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={classes.bodyList}>
                  {' '}
                  <img width={'100%'} src={GenralGoal} alt='home' />
                </div>
                <div className={classes.bodyList}>
                  <div className={classes.bodyItem}>
                    <FontAwesomeIcon icon={faStar} />
                    <h6>
                      تحسين العمليات الإدارية بالإدارات التعليمية في محافظة
                      الفيوم على ضوء مدخل الإدارة الالكترونية
                    </h6>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
