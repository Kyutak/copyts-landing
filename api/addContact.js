export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY, // 🔑 chave da Brevo no .env
      },
      body: JSON.stringify({
        email,
        listIds: [2], // 📝 coloque aqui o ID da lista da Brevo
        updateEnabled: true, // atualiza se já existir
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro Brevo:", errorData);
      return res.status(response.status).json({ error: "Erro ao salvar contato na Brevo" });
    }

    return res.status(200).json({ message: "Contato adicionado na Brevo!" });
  } catch (error) {
    console.error("Erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
