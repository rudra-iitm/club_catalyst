import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, 
}));
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static("public"));

//routes
import userRouter from './routes/user.route.js'
import requestRouter from './routes/request.route.js'
import approvalRouter from './routes/approval.route.js'
import accessControlRouter from './routes/access_control.route.js'
import exportRouter from './routes/export.route.js'
import dashboardRouter from './routes/dashboard.route.js'
import notificationRouter from './routes/notification.route.js'

app.use('/api/v1/user', userRouter);
app.use('/api/v1/requests', requestRouter);
app.use('/api/v1/approvals', approvalRouter);
app.use('/api/v1/access-control', accessControlRouter);
app.use('/api/v1/export', exportRouter);
app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/notifications', notificationRouter);

export {
    app
};