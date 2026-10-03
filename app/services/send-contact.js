
export const send_contact_service = async (payload) => {
  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbw5imM2mGxwUd4PCURQQcnqWM6zGteVQDkIO7tTPp9zGMW_M-ifCmsRblJr9flpz9sy/exec";

  const response = await fetch(webAppUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      recipient: payload.recipient || "",
      bcc: payload.bcc || "",
      subject: payload.subject || "",
      body: payload.body || "",
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Read response as plain text first
  const textData = await response.text();

  // Safely try to parse JSON, or fall back to returning text
  try {
    return JSON.parse(textData);
  } catch {
    return { status: "success", message: textData };
  }
};
