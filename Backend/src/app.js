import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import logger from 'morgan';
import passport from 'passport';
import env from '../config';
import passportSession from '../config/Passport/index';
import UserController from './controllers/UserController';
import GameController from './controllers/GameController';
import CommentController from './controllers/CommentController';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use('/upload', express.static('upload'));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(
  session({
    secret: env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser(env.COOKIE_SECRET));
passportSession(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users',UserController);
app.use('/api/games',GameController);
app.use('/api/comments',CommentController);

app.listen(env.PORT, ()=>{
    console.log('서버시작');
})