export interface Todo {
  time: string;
  region: string;
}

export async function handler(): Promise<any> {
  const resp = {
    timestamp: '122',
    region: 'ap-southeast-2'
  };
  console.log('returning response', resp);
  return {
    statusCode: 200,
    body: JSON.stringify(resp)
  };
}
