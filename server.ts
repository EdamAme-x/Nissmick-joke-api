import { Hono } from "https://deno.land/x/hono@v3.0.0/mod.ts";
import { serve } from 'https://deno.land/std@0.180.0/http/server.ts'
import JOKES from "./jokes.json" assert {
  type: "json"
};

const app = new Hono();

function randomPick<T = unknown>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

app.all("*", (c) => {
  return c.json(randomPick(JOKES["jokes"]))
})

serve(app.fetch)