
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email é obrigatório" });

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY, 
      },
      body: JSON.stringify({
        email,
        listIds: [7], // coloque aqui o ID da sua lista na Brevo
        updateEnabled: true, // atualiza se o email já existir
      }),
    });

    const data = await response.json();

    if (!response.ok) return res.status(response.status).json(data);

    return res.status(200).json({ message: "Contato adicionado com sucesso", data });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor", error: error.message });
  }
}