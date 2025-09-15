export const errorHandler = (err, req, res, next) => {
  console.error("❌ Erro:", err.message);
  res.status(500).json({ error: "Erro interno do servidor" });
};
