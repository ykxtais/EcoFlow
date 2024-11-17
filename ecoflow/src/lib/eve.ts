import axios from "axios";

const apiKey = "qKVg4KV-JBSW0ShnPNQ5tKpo62ijFmvt_IzBAneB5qHk"; 
const assistantId = "6fa1f13c-cdd9-4260-b7d7-64339c211594"; 
const instanceUrl = "https://api.au-syd.assistant.watson.cloud.ibm.com/instances/7667f19c-2890-4ce5-8c56-d26e9fd1ddea";

export default async function createSession(p0: string, p1: string): Promise<string> {
  try {
    const response = await axios.post(
      `${instanceUrl}/v2/assistants/${assistantId}/sessions?version=2021-06-14`,
      {},
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`apikey:${apiKey}`).toString(
            "base64"
          )}`,
        },
      }
    );
    return response.data.session_id;
  } catch (error) {
    console.error("Erro ao criar sessão na API: ", error);
    throw error;
  }
}

export async function sendMessageToWatson(
  message: string,
  sessionId: string
): Promise<string> {
  try {
    const response = await axios.post(
      `${instanceUrl}/v2/assistants/${assistantId}/sessions/${sessionId}/message?version=2021-06-14`,
      {
        input: { text: message },
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`apikey:${apiKey}`).toString(
            "base64"
          )}`,
        },
      }
    );
    return response.data.output.generic[0]?.text || "Não entendi";
  } catch (error) {
    console.error("Erro ao enviar mensagem para API: ", error);
    throw error;
  }
}
