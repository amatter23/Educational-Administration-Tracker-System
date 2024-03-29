import {
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
  router,
  redirect,
  loader,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TrackerForm from './components/Tracker/TrackerForm/TrackerForm';
import UserRoute from './routes/UserRoute.js';
import Home from './pages/Home/Home';
import TrackerSchools from './components/Tracker/TrackerSchools/TrackerSchools';
import Login from './pages/Login/Login';
import { getPersonalData } from '../src/utils/getData';
import Loader from '../src/pages/Loader';
import AdminTable from './components/Admin/AdminTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { checkAuth, refreshToken } from './utils/auth';
import DashboardCheckBox from './components/Users/Dashbord/DashbordCheckBox/DashboardCheckBox';
import SchoolsTable from './components/Users/Dashbord/UserSchools/SchoolsTable/SchoolsTable';
import UserCheckBoxData from './components/Users/FormData/General/FormData';
import UserInformationView from './pages/UserInformationView/UserInformationView';
import './App.css';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import LapDashbord from './components/Users/Dashbord/LapDashbord/Dashbord/LapDashbord';
import WorkersAffairsDashbord from './components/Users/Dashbord/WorkersAffairs/Dashbord/WorkersAffairsDashbord';
import StudentsAffairsDashbord from './components/Users/Dashbord/StudentsAffairsDashbord/Dashbord/StudentsAffairsDashbord';
import FormData from './components/Users/FormData/StudentsAffairs/FormData';
import QualityDashborde from './components/Users/Dashbord/QualityDashbord/Dashbord/QualityDashbord';
import TeacherDashbord from './components/Users/Dashbord/TeacherDashbord/Dashbord/TeacherDashbord';
import LowLevelPlan from './components/Users/LowLevelPlan/LowLevelPlan';
import HightLevelPlan from './components/Manager/hightLevelPlan/HightLevelPlan';
import ManagerDashBord from './components/Manager/Dashbord/ManagerDashBord';
import ManagementPlan from './components/Users/ManagementPlan/ManagementPlan';
function App() {
  // state to store the user data

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
  // state to store the user data
  const [userData, UpdateUserData] = useState({});
  // state to store and pass roles have checkbox inputs
  const [userRolesHaveCheckBoxInputs, setUserRoles] = useState([
    'administration_admin',
    'environment_population_admin',
    'strategic_planning_admin',
    'production_unit_admin',
    'decentralization_admin',
    'training_admin',
    'cooperative_admin',
    'nutrition_admin',
    'security_safety_admin',
  ]);
  // state to store the error
  const [error, setError] = useState(false);
  // state to store the loading
  const [isLoading, setLoading] = useState(false);
  // create a router for the tracker
  const routerTracker = createBrowserRouter([
    {
      path: '/',
      element: <UserRoute userData={userData} />,
      children: [
        {
          path: '/',
          element: <TrackerSchools />,
        },
        {
          path: '/trackerForm',
          element: <TrackerForm />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
      ],
    },
  ]);
  // create a router for the admin
  const routerAdmin = createBrowserRouter([
    {
      path: '/',
      element: <UserRoute userData={userData} />,
      children: [
        {
          path: '/',
          element: <AdminTable />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
      ],
    },
  ]);
  // create a router for the users have checkbox inputs
  const routerUsersInputsCheckBox = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute
          userRolesHaveCheckBoxInputs={userRolesHaveCheckBoxInputs}
          userData={userData}
        />
      ),
      children: [
        {
          path: '/',
          element: <DashboardCheckBox userData={userData} />,
        },
        {
          path: '/schools',
          element: <SchoolsTable userData={userData} />,
        },
        {
          path: '/formData',
          element: <UserCheckBoxData userData={userData} />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
        {
          path: '/plan',
          element: <LowLevelPlan userData={userData} />,
        },
        {
          path: '/managementPlan',
          element: <ManagementPlan userData={userData} />,
        },
      ],
    },
  ]);
  // create a router for Laboratories user
  const routerLaboratories = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute
          userRolesHaveCheckBoxInputs={userRolesHaveCheckBoxInputs}
          userData={userData}
        />
      ),
      children: [
        {
          path: '/',
          element: <LapDashbord userData={userData} />,
        },
        {
          path: '/schools',
          element: <SchoolsTable userData={userData} />,
        },
        {
          path: '/formData',
          element: <UserCheckBoxData userData={userData} />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
        {
          path: '/plan',
          element: <LowLevelPlan userData={userData} />,
        },
        {
          path: '/managementPlan',
          element: <ManagementPlan userData={userData} />,
        },
      ],
    },
  ]);
  const routerWorkersAffairs = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute
          userRolesHaveCheckBoxInputs={userRolesHaveCheckBoxInputs}
          userData={userData}
        />
      ),
      children: [
        {
          path: '/',
          element: <WorkersAffairsDashbord userData={userData} />,
        },
        {
          path: '/schools',
          element: <SchoolsTable userData={userData} />,
        },
        {
          path: '/formData',
          element: <UserCheckBoxData userData={userData} />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
        {
          path: '/plan',
          element: <LowLevelPlan userData={userData} />,
        },
        {
          path: '/managementPlan',
          element: <ManagementPlan userData={userData} />,
        },
      ],
    },
  ]);
  // create a router for the students affairs
  const routerStudentsAffairs = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute
          userRolesHaveCheckBoxInputs={userRolesHaveCheckBoxInputs}
          userData={userData}
        />
      ),
      children: [
        {
          path: '/',
          element: <StudentsAffairsDashbord userData={userData} />,
        },
        {
          path: '/schools',
          element: <SchoolsTable userData={userData} />,
        },
        {
          path: '/formData',
          element: <FormData userData={userData} />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
        {
          path: '/plan',
          element: <LowLevelPlan userData={userData} />,
        },
        {
          path: '/managementPlan',
          element: <ManagementPlan userData={userData} />,
        },
      ],
    },
  ]);

  const routerQuality = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute
          userRolesHaveCheckBoxInputs={userRolesHaveCheckBoxInputs}
          userData={userData}
        />
      ),
      children: [
        {
          path: '/',
          element: <QualityDashborde userData={userData} />,
        },
        {
          path: '/schools',
          element: <SchoolsTable userData={userData} />,
        },
        {
          path: '/formData',
          element: <FormData userData={userData} />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
        {
          path: '/plan',
          element: <LowLevelPlan userData={userData} />,
        },
        {
          path: '/managementPlan',
          element: <ManagementPlan userData={userData} />,
        },      ],
    },
  ]);

  const routerTeachers = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute
          userRolesHaveCheckBoxInputs={userRolesHaveCheckBoxInputs}
          userData={userData}
        />
      ),
      children: [
        {
          path: '/',
          element: <TeacherDashbord userData={userData} />,
        },
        {
          path: '/schools',
          element: <SchoolsTable userData={userData} />,
        },
        {
          path: '/formData',
          element: <FormData userData={userData} />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
        {
          path: '/plan',
          element: <LowLevelPlan userData={userData} />,
        },
        {
          path: '/managementPlan',
          element: <ManagementPlan userData={userData} />,
        },
      ],
    },
  ]);
  // create a router for the login page
  const routerLogin = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  const routerManager = createBrowserRouter([
    {
      path: '/',
      element: (
        <UserRoute
          userRolesHaveCheckBoxInputs={userRolesHaveCheckBoxInputs}
          userData={userData}
        />
      ),
      children: [
        {
          path: '/',
          element: <ManagerDashBord userData={userData} />,
        },
        {
          path: '/plan',
          element: <HightLevelPlan userData={userData} />,
        },
        {
          path: '/managmentPlan',
          element: <ManagementPlan userData={userData} />,
        },
        {
          path: '/userInformation',
          element: <UserInformationView userData={userData} />,
        },
      ],
    },
  ]);

  // function to choose the router by the user role
  const chooseRouterByRole = () => {
    // check if the user is authenticated
    if (checkAuth() === true) {
      if (userData.role === 'system_admin') {
        return <RouterProvider router={routerAdmin} />;
      } else if (userData.role === 'tracker') {
        return <RouterProvider router={routerTracker} />;
      } else if (userData.role === 'manager') {
        return <RouterProvider router={routerManager} />;
      } else if (userRolesHaveCheckBoxInputs.includes(userData.role)) {
        return <RouterProvider router={routerUsersInputsCheckBox} />;
      } else if (userData.role === 'laboratories_admin') {
        return <RouterProvider router={routerLaboratories} />;
      } else if (userData.role === 'workers_affairs_admin') {
        return <RouterProvider router={routerWorkersAffairs} />;
      } else if (userData.role === 'students_affairs_admin') {
        return <RouterProvider router={routerStudentsAffairs} />;
      } else if (userData.role === 'quality_admin') {
        return <RouterProvider router={routerQuality} />;
      } else if (userData.role === 'teachers_admin') {
        return <RouterProvider router={routerTeachers} />;
      }
    }
    // if the user is not authenticated redirect to login page
    else {
      return <RouterProvider router={routerLogin} />;
    }
  };
  //create a function to fetch user date the data from the server
  const fetchUserData = async e => {
    if (checkAuth() === true) {
      setLoading(true);
      try {
        const response = getPersonalData().then(data => {
          if (data.status === 200) {
            setLoading(false);
            UpdateUserData({
              fallName: data.result.first_name + ' ' + data.result.last_name,
              role: data.result.role,
              email: data.result.email,
              phone: data.result.phone,
              id: data.result.id,
              firstName: data.result.first_name,
              lastName: data.result.last_name,
              userName: data.result.username,
              password: data.result.password,
            });
            return;
          } else if (data === 401) {
            const response1 = refreshToken(
              localStorage.getItem('refreshToken')
            ).then(data => {
              setLoading(false);
              if (data.status === 200) {
                window.location.reload(true);
                return;
              } else if (data === 401) {
                localStorage.clear();
                window.location.reload(true);
                setError(true);
                return;
              }
            });

            setError(true);
            return;
          }
        });
      } catch (error) {
        setError('Something went wrong');
        return;
      }
    } else if (checkAuth() === false) {
      chooseRouterByRole();
    }
  };

  // useEffect to fetch the data from the server
  useEffect(() => {
    fetchUserData();
  }, []);

  // loading  handling
  if (isLoading === true) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    );
  }
  // error handling
  else if (error === true) {
    return (
      <div className='loader'>
        <FontAwesomeIcon icon={faCircleExclamation} size='2xl' />
        <span>Can't retch it now</span>
      </div>
    );
  }
  return chooseRouterByRole();
}

export default App;
