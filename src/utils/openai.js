import OpenAI from 'openai';
import { GPT_API_KEY } from './constant';

const openAi = new OpenAI({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser:true // This is the default and can be omitted
});

export default openAi;