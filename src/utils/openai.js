import OpenAI from 'openai';

const openAi = new OpenAI({
  apiKey: process.env.REACT_APP_GPT_API_KEY,
  dangerouslyAllowBrowser:true // This is the default and can be omitted
});

export default openAi;