// component for the tracker form that is used to add a new school to the track and add all the information about the school to the database
// this component is used in the Tracker.js component

import React, { useState, useEffect } from 'react';
import classes from './TrackerForm.module.css';
import { addForm } from '../../../utils/getData';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../../pages/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Select from 'react-select';

// the main component function

const TrackerForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    school_name: '',
    school_id: '',
    school_level: '',
    students_affairs: {
      first_class: {
        registered: null,
        present: null,
        absent: null,
      },
      transfers_to_school: null,
      transfers_from_school: null,
      transferred_files: null,
      issue: {
        issue: '',
      },
    },
    security_safety: {
      labs: 'null',
      cabins: 'null',
      building: 'null',
      wall: 'null',
      external_factors: 'null',
      security_factors: {
        fire_line: 'null',
        tanks: 'null',
        buckets: 'null',
        fire_extinguishers: 'null',
      },
      issue: {
        issue: '',
      },
    },
    teachers: {
      material_one: {
        name: '',
        increase: null,
        decrease: null,
      },
      issue: {
        issue: '',
      },
    },
    workers_affairs: {
      registered: null,
      present: null,
      absent: null,
      negatives: null,
      issue: {
        issue: '',
      },
    },
    strategic_planning: {
      obstacles: null,
      plan_activation: null,
      team_building: null,
      plan: null,
      analysis: null,
      issue: {
        issue: '',
      },
    },
    administration: {
      execution_plan: null,
      team_building: null,
      analysis: null,
      activities_activation: null,
      obstacles: null,
      predicted_crisis: null,
      communication_system: null,
      risks_indicators: null,
      plan: null,
      training_on_plan: null,
      issue: {
        issue: '',
      },
    },
    training: {
      teachers_training: null,
      training_plan: null,
      training_plan_activation: null,
      issue: {
        issue: '',
      },
    },
    nutrition: {
      daily_received: null,
      daily_served: null,
      disciplined_distribution: null,
      health_certificate: null,
      not_stored_periods: null,
      issue: {
        issue: '',
      },
    },
    cooperative: {
      existing_authorized_items: null,
      drag_running: null,
      drag_profits: null,
      issue: {
        issue: '',
      },
    },
    laboratories: {
      work_validity: null,
      networks: null,
      computers: null,
      evaluation: null,
      tilo: null,
      issue: {
        issue: null,
      },
    },
    decentralization: {
      board_of_trustees: null,
      decentralization_committee: null,
      settlement: null,
      exchange: null,
      plan: null,
      append: null,
      issue: {
        issue: '',
      },
    },
    production_unit: {
      profit_distribution: null,
      supply: null,
      activation: null,
      certified: null,
      issue: {
        issue: '',
      },
    },
    environment_population: {
      toilets_health_procedures: null,
      health_file: null,
      diagnosis_health_plan: null,
      check_health_plan: null,
      activities: null,
      labs_health_procedures: null,
      issue: {
        issue: '',
      },
    },
    quality: {
      first_year_one: null,
      second_year_one: null,
      third_year_one: null,
      first_year_two: null,
      second_year_two: null,
      third_year_two: null,
      first_year_three: null,
      second_year_three: null,
      third_year_three: null,
      issue: {
        issue: '',
      },
    },
  });

  const [schoolLevel, setSchoolLevel] = useState([
    { value: 'primary', label: t('primary'), count: 6 },
    { value: 'intermediate', label: t('intermediate'), count: 3 },
    { value: 'secondary', label: t('secondary'), count: 3 },
  ]);

  const [schoolLevelPrimary, setSchoolLevelPrimary] = useState([
    { value: 'first_class', label: t('first_class') },
    { value: 'second_class', label: t('second_class') },
    { value: 'third_class', label: t('third_class') },
    { value: 'fourth_class', label: t('fourth_class') },
    { value: 'fifth_class', label: t('fifth_class') },
    { value: 'sixth_class', label: t('sixth_class') },
  ]);

  const [schoolLevelIntermediate, setSchoolLevelIntermediate] = useState([
    { value: 'first_class', label: t('first_class') },
    { value: 'second_class', label: t('second_class') },
    { value: 'third_class', label: t('third_class') },
  ]);

  const [schoolLevelSecondary, setSchoolLevelSecondary] = useState([
    { value: 'first_class', label: t('first_class') },
    { value: 'second_class', label: t('second_class') },
    { value: 'third_class', label: t('third_class') },
  ]);


   // todo : add school material for all levels
  const [schoolsMaterialPrimary, setSchoolsMaterialPrimary] = useState([
    { value: 'classroom', label: t('classroom') },
    { value: 'library', label: t('library') },
    { value: 'laboratory', label: t('laboratory') },
    { value: 'office', label: t('office') },
    { value: 'bathroom', label: t('bathroom') },
  ]);
  const [schoolsMaterialIntermediate, setSchoolsMaterialIntermediate] = useState([
    { value: 'classroom', label: t('classroom') },
    { value: 'library', label: t('library') },
    { value: 'laboratory', label: t('laboratory') },
    { value: 'office', label: t('office') },
    { value: 'bathroom', label: t('bathroom') },
  ]);

  const [issueField, setIssueField] = useState({
    students_affairs: {
      issue: false,
    },
    security_safety: {
      issue: [false, false],
    },
    teachers: {
      issue: false,
    },
    workers_affairs: {
      issue: false,
    },
    strategic_planning: {
      issue: false,
    },
    administration: {
      issue: false,
    },
    training: {
      issue: false,
    },
    nutrition: {
      issue: false,
    },
    cooperative: {
      issue: false,
    },
    laboratories: {
      issue: false,
    },
    decentralization: {
      issue: false,
    },
    production_unit: {
      issue: false,
    },
    environment_population: {
      issue: false,
    },
    quality: {
      issue: false,
    },
  });

  // check if the form is loading or not
  const [isLoading, setIsLoading] = useState();
  // check if the form is submitted or not
  const [isError, setIsError] = useState('none');

  // function test(obj) {
  //     for (let prop in obj) {
  //      console.log(isError);
  //       if (typeof obj[prop] === 'object') {
  //         if (test(obj[prop])) {
  //          setIsError("flex");
  //          console.log(obj[prop]);
  //         }
  //       } else {
  //         if (typeof obj[prop] === 'string' && obj[prop].includes('غير')) {
  //           console.log(obj[prop]);
  //           setIsError("flex");
  //         }
  //       }
  //     }
  //     setIsError("none");
  //   }
  const test = () => {
    const hasNonArabicValue = Object.values(inputs).some(value => {
      if (typeof value === 'object' && value !== null) {
        return Object.values(value).some(
          nestedValue => !nestedValue?.includes('غير')
        );
      }
      return !value?.includes('غير');
    });
  };

  // function to handle the submit of the form
  const addFormHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await addForm(inputs).then(response => {
        localStorage.removeItem('myFormData');
        setIsLoading(false);
        if (response.error === true) {
          toast.error('حاول مره اخري', {});
        } else {
          toast.success('تم اضافة المدرسه بنجاح', {});
          setIsLoading(false);
          setTimeout(() => {
            navigate('/');
          }, 5000);
        }
      });
    } catch (error) {
      toast.error('حاول مره اخري', {});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    // if (localStorage.getItem('myFormData') !== null) {
    //   const data = localStorage.getItem('myFormData');
    //   setinputs(JSON.parse(data));
    // }

    setIsLoading(false);
  }, []);

  // let allKeysAreEmpty = true;
  // Object.keys(inputs.quality).forEach(key => {
  //   if (inputs.quality[key] !== '') {
  //     allKeysAreEmpty = false;
  //   }
  // });

  // const checkIssues = objectTrack => event => {
  //   // if (Object.keys(objectTrack) === 0) {
  //     if (objectTrack.includes('غير' || 'لا')) {
  //       console.log('true');
  //       return true;
  //     } else {
  //       console.log('false');
  //       return false;
  //     }
  //   // }
  //   // } else {
  //   //   Object.keys(objectTrack).forEach(key => {
  //   //     if (objectTrack[key] === 'غير' || objectTrack[key] === 'لا') {
  //   //       console.log('true');
  //   //       return true;
  //   //     } else {
  //   //       console.log('false');
  //   //       return false;
  //   //     }
  //   //   });
  //   // }
  // };

  if (isLoading === true) {
    return (
      <div className={classes.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={classes.contaner}>
      <ToastContainer />
      {isLoading && (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      <form
        onChange={() => {
          localStorage.setItem('myFormData', JSON.stringify(inputs));
        }}
        className={classes.form}
        onSubmit={addFormHandler}
      >
        <div className={classes.field}>
          <h4>بيانات المدرسه</h4>
          <div className={classes.inputs}>
            <div className='input-label'>
              <label htmlFor=''>الرقم التعريفي</label>
              <input
                onChange={e =>
                  setinputs({
                    ...inputs,
                    school_id: e.target.value,
                  })
                }
                defaultValue={inputs.school_id}
                id='school_id'
                type='text'
              />
            </div>
            <div className='input-label'>
              <label htmlFor=''>المرحله</label>

              <Select
                onChange={(value, e) =>
                  setinputs({
                    ...inputs,
                    school_level: value.value,
                  })
                }
                options={schoolLevel}
              ></Select>
            </div>
            <div className='input-label'>
              <label htmlFor=''>اسم المدرسه</label>
              <input
                onChange={e =>
                  setinputs({
                    ...inputs,
                    school_name: e.target.value,
                  })
                }
                defaultValue={inputs.school_name}
                id='school_name'
                type='text'
              />
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>شئون طلبة</h4>
          <h5>الطلبه</h5>
          <div
            style={{ flexDirection: 'row-reverse' }}
            className={classes.inputs}
          >
            {inputs.school_level === '' ? (
              <h3>{t('Choose Level first')}</h3>
            ) : inputs.school_level === 'primary' ? (
              schoolLevelPrimary.map((item, index) => (
                <div className={classes.input}>
                  <div className='input-label'>
                    <label htmlFor=''>الحاضر</label>
                    <input
                      placeholder='0'
                      id='students_affairs-first_class-present'
                      type='number'
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          students_affairs: {
                            ...inputs.students_affairs,
                            [item.value]: {
                              ...inputs.students_affairs[[item.value]],
                              present: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                  <div className='input-label'>
                    <label htmlFor=''>المقيد</label>
                    <input
                      placeholder='0'
                      id='students_affairs-first_class-registered'
                      type='number'
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          students_affairs: {
                            ...inputs.students_affairs,
                            [item.value]: {
                              ...inputs.students_affairs[item.value],
                              registered: e.target.value,
                              level: inputs.school_level,
                            },
                          },
                        })
                      }
                    />
                  </div>
                  <h6>{t(item.value)}</h6>
                </div>
              ))
            ) : (
              schoolLevelIntermediate.map((item, index) => (
                <div className={classes.input}>
                  <div className='input-label'>
                    <label htmlFor=''>الحاضر</label>
                    <input
                      placeholder='0'
                      id='students_affairs-first_class-present'
                      type='number'
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          students_affairs: {
                            ...inputs.students_affairs,
                            [item.value]: {
                              ...inputs.students_affairs[[item.value]],
                              present: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                  <div className='input-label'>
                    <label htmlFor=''>المقيد</label>
                    <input
                      placeholder='0'
                      id='students_affairs-first_class-registered'
                      type='number'
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          students_affairs: {
                            ...inputs.students_affairs,
                            [item.value]: {
                              ...inputs.students_affairs[item.value],
                              registered: e.target.value,
                              level: inputs.school_level,
                            },
                          },
                        })
                      }
                    />
                  </div>
                  <h6>{t(item.value)}</h6>
                </div>
              ))
            )}
          </div>
          <h5>التحويلات</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  value={'غير منضبط'}
                  placeholder='"غير منضبط"'
                  // checked={
                  //   inputs.students_affairs.transferred_files === 'غير منضبط'
                  // }
                  checked={
                    inputs.students_affairs.transferred_files === 'غير منضبط'
                  }
                  onChange={() => {
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transferred_files: 'غير منضبط',
                      },
                    });
                    setIssueField({
                      ...issueField,
                      students_affairs: {
                        issue: true,
                      },
                    });
                  }}
                  name='students_affairs-transferred_files'
                  id='students_affairs-transferred_files'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
              </div>
              <div className={classes.input}>
                <input
                  placeholder='0'
                  checked={
                    inputs.students_affairs.transferred_files === 'منضبط'
                  }
                  onChange={() => {
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transferred_files: 'منضبط',
                      },
                    });
                    setIssueField({
                      ...issueField,
                      students_affairs: {
                        issue: false,
                      },
                    });
                  }}
                  name='students_affairs-transferred_files'
                  id='students_affairs-transferred_files'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
              </div>

              <h6>ملفات التحويل</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الي</label>
                <input
                  placeholder='0'
                  id='students_affairs-transfers_to_school'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transfers_to_school: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className='input-label'>
                <label htmlFor=''>من</label>
                <input
                  placeholder='0'
                  id='students_affairs-transfers_from_school'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transfers_from_school: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  students_affairs: {
                    ...inputs.students_affairs,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>شئون عاملين</h4>
          <h5>عاملين</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الحاضر</label>
                <input
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      workers_affairs: {
                        ...inputs.workers_affairs,
                        present: e.target.value,
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='number'
                />
              </div>
              <div className='input-label'>
                <label htmlFor=''>المقيد</label>
                <input
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      workers_affairs: {
                        ...inputs.workers_affairs,
                        registered: e.target.value,
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='number'
                />
              </div>
            </div>
          </div>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  onChange={e => {
                    setinputs({
                      ...inputs,
                      workers_affairs: {
                        ...inputs.workers_affairs,
                        negatives: e.target.checked ? 'لا يوجد' : 'يوجد',
                      },
                    });
                    setIssueField({
                      ...issueField,
                      workers_affairs: {
                        issue: !issueField.workers_affairs.issue,
                      },
                    });
                  }}
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> نعم</label>
              </div>
              <h6> يوجد سلبيه</h6>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  workers_affairs: {
                    ...inputs.workers_affairs,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>الامن و السلامه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.external_factors === 'غير منضبط'
                  }
                  onChange={() => {
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        external_factors: 'غير منضبط',
                      },
                    });
                    test();
                  }}
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.external_factors === 'منضبط'}
                  onChange={() => {
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        external_factors: 'منضبط',
                      },
                    });
                    test();
                  }}
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> عوامل خارجيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.wall === 'غير منضبط'}
                  onChange={() => {
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        wall: 'غير منضبط',
                      },
                    });
                    setIssueField({
                      ...issueField,
                      security_safety: {
                        issue: true,
                      },
                    });
                  }}
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.wall === 'منضبط'}
                  onChange={() => {
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        wall: 'منضبط',
                      },
                    });
                    setIssueField({
                      ...issueField,
                      security_safety: {
                        issue: false,
                      },
                    });
                  }}
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> سور</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.building === 'غير منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        building: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.building === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        building: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> مبني</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.cabins === 'غير منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        cabins: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.cabins === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        cabins: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> حجرات</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.labs === 'غير منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        labs: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='"غير منضبط"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.labs === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        labs: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> معامل</h6>
              </div>
            </div>
          </div>
          <h5>عوامل الامن</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors
                      .fire_extinguishers === 'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_extinguishers: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors
                      .fire_extinguishers === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_extinguishers: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> طفايات</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors.buckets ===
                    'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          buckets: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors.buckets === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          buckets: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> جرادل</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors.tanks === 'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          tanks: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors.tanks === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          tanks: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> خزانات</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors.fire_line ===
                    'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_line: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors.fire_line === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_line: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> خط حريق</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  security_safety: {
                    ...inputs.security_safety,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>التغذيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.health_certificate === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        health_certificate: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.health_certificate === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        health_certificate: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> شهاده صحيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.nutrition.disciplined_distribution === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        disciplined_distribution: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.disciplined_distribution === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        disciplined_distribution: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> انضباط التوزيع</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.daily_served === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_served: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.daily_served === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_served: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يتم التوزيع بشكل يومي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.daily_received === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_received: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.daily_received === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_received: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يتم الاستلام بشكل يومي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.not_stored_periods === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        not_stored_periods: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.not_stored_periods === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        not_stored_periods: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> لا يتم التخزين لفترات</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  nutrition: {
                    ...inputs.nutrition,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>الجمعيه التعاونيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.cooperative.drag_profits === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_profits: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.cooperative.drag_profits === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_profits: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للارباح</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.cooperative.drag_running === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_running: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.cooperative.drag_running === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_running: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للتشغيل </h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.cooperative.existing_authorized_items === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        existing_authorized_items: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.cooperative.existing_authorized_items === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        existing_authorized_items: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label tmlFor=''> يوجد</label>
                <h6> الاصناف الموجوده مصرح بيها</h6>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                margin: '0 auto',
              }}
              className={classes.issue}
            >
              <input
                style={{ width: '70%', margin: '0 auto' }}
                placeholder={t('Issue')}
                type='text'
                onChange={e =>
                  setinputs({
                    ...inputs,
                    cooperative: {
                      ...inputs.cooperative,
                      issue: {
                        issue: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الجوده</h4>
          {inputs.school_level === '' ? (
            <h3>{t('Choose Level first')}</h3>
          ) : inputs.school_level === 'primary' ? (
            schoolLevelPrimary.map((item, index) => (
              <>
                <h5>{t(item.value)}</h5>
                <div className={classes.inputs}>
                  <div className={classes.input}>
                    <div className='input-label'>
                      <label htmlFor=''>نسبه النحاح</label>
                      <input
                        placeholder='0'
                        id='students_affairs-first_class-present'
                        type='number'
                        onChange={e =>
                          setinputs({
                            ...inputs,
                            quality: {
                              ...inputs.quality,
                              [item.value.replace('class', 'year') + `_three`]:
                                e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <h6>العام الثالث</h6>
                  </div>
                  <div className={classes.input}>
                    <div className='input-label'>
                      <label htmlFor=''>نسبه النحاح</label>
                      <input
                        placeholder='0'
                        id='students_affairs-first_class-present'
                        type='number'
                        onChange={e =>
                          setinputs({
                            ...inputs,
                            quality: {
                              ...inputs.quality,
                              [item.value.replace('class', 'year') + `_two`]:
                                e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <h6>العام الثاني</h6>
                  </div>
                  <div className={classes.input}>
                    <div className='input-label'>
                      <label htmlFor=''>نسبه النحاح</label>
                      <input
                        placeholder='0'
                        id='students_affairs-first_class-present'
                        type='number'
                        onChange={e =>
                          setinputs({
                            ...inputs,
                            quality: {
                              ...inputs.quality,
                              [item.value.replace('class', 'year') + `_one`]:
                                e.target.value,
                            },
                          })
                        }
                      />
                    </div>

                    <h6>العام الاول</h6>
                  </div>
                </div>
              </>
            ))
          ) : (
            schoolLevelIntermediate.map((item, index) => (
              <>
                <h5>{t(item.value)}</h5>
                <div className={classes.inputs}>
                  <div className={classes.input}>
                    <div className='input-label'>
                      <label htmlFor=''>نسبه النحاح</label>
                      <input
                        placeholder='0'
                        id='students_affairs-first_class-present'
                        type='number'
                        onChange={e =>
                          setinputs({
                            ...inputs,
                            quality: {
                              ...inputs.quality,
                              [item.value.replace('class', 'year') + `_three`]:
                                e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <h6>العام الثالث</h6>
                  </div>
                  <div className={classes.input}>
                    <div className='input-label'>
                      <label htmlFor=''>نسبه النحاح</label>
                      <input
                        placeholder='0'
                        id='students_affairs-first_class-present'
                        type='number'
                        onChange={e =>
                          setinputs({
                            ...inputs,
                            quality: {
                              ...inputs.quality,
                              [item.value.replace('class', 'year') + `_two`]:
                                e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <h6>العام الثاني</h6>
                  </div>
                  <div className={classes.input}>
                    <div className='input-label'>
                      <label htmlFor=''>نسبه النحاح</label>
                      <input
                        placeholder='0'
                        id='students_affairs-first_class-present'
                        type='number'
                        onChange={e =>
                          setinputs({
                            ...inputs,
                            quality: {
                              ...inputs.quality,
                              [item.value.replace('class', 'year') + `_one`]:
                                e.target.value,
                            },
                          })
                        }
                      />
                    </div>

                    <h6>العام الاول</h6>
                  </div>
                </div>
              </>
            ))
          )}
          {/* this field is isseu by graeds */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  quality: {
                    ...inputs.quality,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>التدريب</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.training.training_plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.training.training_plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.training.training_plan_activation === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan_activation: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.training.training_plan_activation === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan_activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه مفعله </h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.training.teachers_training === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        teachers_training: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.training.teachers_training === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        teachers_training: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> تدريب المعلمين</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  training: {
                    ...inputs.training,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>المعامل</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          tilo: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> Tilo</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          evaluation: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> تطور</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          computers: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> حاسب الي</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          networks: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> شبكات</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          ory_association: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> اتحاد اوري</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.laboratories.work_validity === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      laboratories: {
                        ...inputs.laboratories,
                        work_validity: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد اعطال</label>
                <input
                  checked={inputs.laboratories.work_validity === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      laboratories: {
                        ...inputs.laboratories,
                        work_validity: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد اعطال</label>
                <h6> صلاحيه العمل</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  laboratories: {
                    ...inputs.laboratories,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>المعلمين</h4>
          <h5>المواد</h5>
          <div className={classes.inputs}>
            {inputs.school_level === '' ? (
              <h3>{t('Choose Level first')}</h3>
            ) : inputs.school_level === 'primary' ? (
              schoolsMaterialPrimary.map((item, index) => (
                <div className={classes.input}>
                  <div className='input-label'>
                    <label htmlFor=''>عجز</label>
                    <input
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          teachers: {
                            ...inputs.teachers,
                            [item.value]: {
                              ...inputs.teachers[item.value],
                              increase: e.target.value,
                            },
                          },
                        })
                      }
                      placeholder='0'
                      id='schoolInf_level'
                      type='number'
                    />
                  </div>
                  <div className='input-label'>
                    <label htmlFor=''>زياده</label>
                    <input
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          teachers: {
                            ...inputs.teachers,
                            [item.value]: {
                              ...inputs.teachers[item.value],
                              decrease: e.target.value,
                            },
                          },
                        })
                      }
                      placeholder='0'
                      id='schoolInf_level'
                      type='number'
                    />
                  </div>
                  <h6>{t(item.value)}</h6>
                </div>
              ))
            ) : (
              schoolsMaterialIntermediate.map((item, index) => (
                <div className={classes.input}>
                  <div className='input-label'>
                    <label htmlFor=''>عجز</label>
                    <input
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          teachers: {
                            ...inputs.teachers,
                            [item.value]: {
                              ...inputs.teachers[item.value],
                              increase: e.target.value,
                            },
                          },
                        })
                      }
                      placeholder='0'
                      id='schoolInf_level'
                      type='number'
                    />
                  </div>
                  <div className='input-label'>
                    <label htmlFor=''>زياده</label>
                    <input
                      onChange={e =>
                        setinputs({
                          ...inputs,
                          teachers: {
                            ...inputs.teachers,
                            [item.value]: {
                              ...inputs.teachers[item.value],
                              decrease: e.target.value,
                            },
                          },
                        })
                      }
                      placeholder='0'
                      id='schoolInf_level'
                      type='number'
                    />
                  </div>
                  <h6>{t(item.value)}</h6>
                </div>
              ))
            )}
          </div>
          {/* this feild issue is by numbers of workers */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  teachers: {
                    ...inputs.teachers,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>الامركزيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.exchange === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        exchange: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.exchange === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        exchange: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الصرف</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.settlement === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        settlement: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.settlement === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        settlement: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> التسويه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.decentralization.decentralization_committee ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        decentralization_committee: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.decentralization.decentralization_committee ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        decentralization_committee: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> لجنه الامركزيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.decentralization.board_of_trustees === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        board_of_trustees: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.board_of_trustees === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        board_of_trustees: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> محضر اجتماع مجلس الامناء</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.append === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        append: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.append === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        append: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الالحاق</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  decentralization: {
                    ...inputs.decentralization,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>الوحده المنتجه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              {/* <div className={classes.input}>
                <input
                  checked={inputs.production_unit.append === 0}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        append: 0,
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div> */}
              <div className={classes.input}>
                <input
                  checked={inputs.production_unit.certified === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        certified: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.production_unit.certified === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        certified: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> معتمد من التوجيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.production_unit.activation === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        activation: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.production_unit.activation === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> تم تفعيل النشاط</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.production_unit.supply === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        supply: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.production_unit.supply === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        supply: 'يوجد',
                      },
                    })
                  }
                  placeholder='"لا يوجد"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> التوريد</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.production_unit.profit_distribution === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        profit_distribution: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.production_unit.profit_distribution === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        profit_distribution: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> توزيع الارباح</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  production_unit: {
                    ...inputs.production_unit,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>التخطيط الاستراتيجي</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.strategic_planning.plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.strategic_planning.team_building === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        team_building: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.team_building === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        team_building: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يوجد تشكيل فريق</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.strategic_planning.plan_activation === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan_activation: 0,
                      },
                    })
                  }
                  placeholder='"لا يوجد"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.plan_activation === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan_activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يتم تفعيل الانشطه حسب الخطه الزمنيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.strategic_planning.obstacles === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        obstacles: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.obstacles === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        obstacles: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> معوقات تطبيق</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.strategic_planning.analysis === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        analysis: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.analysis === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        analysis: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يوجد تحليل للوضع الراهن</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  strategic_planning: {
                    ...inputs.strategic_planning,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4>البيئه و السكان </h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.check_health_plan ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        check_health_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.check_health_plan === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        check_health_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه للفحص الطبي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.diagnosis_health_plan ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        diagnosis_health_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.diagnosis_health_plan ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        diagnosis_health_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه للتشخيص الطبي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.health_file === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        health_file: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.environment_population.health_file === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        health_file: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> ملف عن الوضع الصحي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.toilets_health_procedures ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        toilets_health_procedures: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.toilets_health_procedures ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        toilets_health_procedures: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الإجراءات الصحيه في دورات المياه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.labs_health_procedures ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        labs_health_procedures: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.labs_health_procedures ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        labs_health_procedures: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الإجراءات الصحيه في المعامل</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.activities === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        activities: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.environment_population.activities === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        activities: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> انشطه البيئه و السكان</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  environment_population: {
                    ...inputs.environment_population,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.field}>
          <h4> الاداره </h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.execution_plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        execution_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.execution_plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        execution_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='"لا يوجد"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه تنفيذ</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.team_building === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        team_building: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.team_building === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        team_building: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> تشكيل لفريق تخطيط</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.analysis === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        analysis: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.analysis === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        analysis: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تحليل الوضع الراهن</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.administration.activities_activation === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        activities_activation: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.administration.activities_activation === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        activities_activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تفعيل الانشطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.obstacles === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        obstacles: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.obstacles === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        obstacles: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>معوقات للتطبيق</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.predicted_crisis === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        predicted_crisis: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.predicted_crisis === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        predicted_crisis: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تصور للازمات المحتمله</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.administration.communication_system === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        communication_system: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.administration.communication_system === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        communication_system: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>نظام اتصال</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.risks_indicators === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        risks_indicators: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.risks_indicators === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        risks_indicators: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>موشرات علي المخاطر</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>يوجد خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.training_on_plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        training_on_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.training_on_plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        training_on_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تدريب علي الخطه</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              margin: '0 auto',
            }}
            className={classes.issue}
          >
            <input
              style={{ width: '70%', margin: '0 auto' }}
              placeholder={t('Issue')}
              type='text'
              onChange={e =>
                setinputs({
                  ...inputs,
                  administration: {
                    ...inputs.administration,
                    issue: {
                      issue: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div className={classes.btn}>
          <button disabled={inputs.school_id ? false : true} className='btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrackerForm;
