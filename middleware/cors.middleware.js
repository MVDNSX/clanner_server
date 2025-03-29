function corsMiddleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Разрешаем все домены (лучше указать конкретный)
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS"); // Добавил OPTIONS
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With"); // Добавил Authorization

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Для preflight-запросов
  }

  next();
}

module.exports = corsMiddleware;