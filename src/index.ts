/* Package imports */
import dotenv from 'dotenv-safe';

/* Module imports */
import { add } from '@src/utils';

/* Load environment variables */
dotenv.config();

/* Run the application */

const result = add(5, 2);

console.log(result, process.env.MY_NAME);

/* End of file */
