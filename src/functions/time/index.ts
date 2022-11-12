export interface Todo {
  time: string,
  region: string
}

export async function handler(): Promise<any> {
  const resp = {
    time : '122',
    region: 'ap-southeast-2'
   };
  console.log("returning response", resp);
  return {
    statusCode: 200,
    body: JSON.stringify(resp),
  };
}
