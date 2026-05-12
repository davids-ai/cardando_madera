import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Archivo invalido" }, { status: 400 });
  }

  const ext = file.name.split(".").pop() || "jpg";
  const path = `uploads/${randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("fundacion-media").upload(path, file, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("fundacion-media").getPublicUrl(path);

  return NextResponse.json({ url: publicUrl });
}
