import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Master from '../layout/Master';
import Dashboard from '../modules/Dashboard';
import Error_500 from '../modules/Error_500';

const ProjectRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/error-500',
                element: <Error_500/>
            },
            
        ]
    }

])

export default ProjectRouter;