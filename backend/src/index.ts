import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { projectRouter } from './routes/projectCnt';


const app = new Hono<{
  Bindings :{
    DATABASE_URL:string,
    JWT_SECRET:string
    header:string
  }
}>();

const corsOptions = {
	origin: 'https://sidhant-singh-rathore-mbfy5ldlb-sidhant-singhs-projects.vercel.app/',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	optionsSuccessStatus: 200,
  };
  
  // Use the CORS middleware
  app.use('*', cors());

app.route('/contactForproject',projectRouter);





export default app
