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
	origin: 'http://localhost:5173/',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	optionsSuccessStatus: 200,
  };
  
  // Use the CORS middleware
  app.use('*', cors());

app.route('/contactForproject',projectRouter);





export default app
