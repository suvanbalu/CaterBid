// Signup and login routes for customer and caterers seperately

// Path: routes\auth.js
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import passport from 'passport';
const router = express.Router();
import { connect } from '../mongo/conn.js';
import { User } from '../models/User.js';
import { Caterer } from '../models/Cuser.js';


router.post('/usignup', (req, res) => {
    