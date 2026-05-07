import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function main() {

  // conectar ao banco
  const db = await open({
    filename: "./banco.db",
    driver: sqlite3.Database
  });

  console.log("Banco conectado!");

  // criar tabela
  await db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY,
      nome TEXT,
      idade INTEGER
    )
  `);

  console.log("Tabela criada!");

  // inserir usuários
  await db.run(
    "INSERT INTO usuarios (nome, idade) VALUES (?, ?)",
    ["Maria", 25]
)