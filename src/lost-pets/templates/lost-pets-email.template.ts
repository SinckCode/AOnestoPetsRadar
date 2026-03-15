import { LostPetCDto } from "src/core/interfaces/lost-pet.interfaces";
import { generateMapboxImage } from "src/core/utils/utils";

export const generateLostPetEmailTemplate = (pet: LostPetCDto): string => {

    const imageUrl = generateMapboxImage(pet.lat, pet.lon);

    const date = new Date().toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0;background:#f5f5f7;font-family:Segoe UI,Roboto,Arial,sans-serif;color:#111;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#f5f5f7;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:22px;overflow:hidden;border:1px solid #eaeaea;box-shadow:0 12px 40px rgba(0,0,0,0.06);">

<!-- HEADER -->

<tr>
<td style="padding:26px 32px;border-bottom:1px solid #f0f0f0;">

<table width="100%">
<tr>

<td>

<span style="display:inline-block;width:10px;height:10px;background:#ff5f57;border-radius:50%;margin-right:6px;"></span>
<span style="display:inline-block;width:10px;height:10px;background:#ffbd2e;border-radius:50%;margin-right:6px;"></span>
<span style="display:inline-block;width:10px;height:10px;background:#28c840;border-radius:50%;"></span>

</td>

<td align="right" style="font-size:12px;color:#999;letter-spacing:2px;font-weight:600;">
PETRADAR SEARCH SYSTEM
</td>

</tr>
</table>

</td>
</tr>

<!-- ALERT BADGE -->

<tr>
<td style="padding:32px 40px 0;">

<span style="display:inline-block;background:#fff5e8;border:1px solid #ffd9a8;color:#d97706;padding:8px 18px;border-radius:40px;font-size:12px;font-weight:600;letter-spacing:1px;">
MASCOTA PERDIDA
</span>

</td>
</tr>

<!-- TITLE -->

<tr>
<td style="padding:18px 40px 0;">

<h1 style="margin:0;font-size:36px;font-weight:800;line-height:1.2;color:#111;">
${pet.name} fue reportado como perdido
</h1>

</td>
</tr>

<!-- TEXT -->

<tr>
<td style="padding:20px 40px 0;">

<p style="margin:0;font-size:16px;line-height:1.6;color:#555;">
Se ha registrado un reporte de mascota perdida en el sistema PetRadar.
Si ves un animal con características similares, puedes ayudar a reunirlo con su dueño.
</p>

</td>
</tr>

<!-- PET INFO -->

<tr>
<td style="padding:34px 40px 0;">

<table width="100%">
<tr>

<td width="33%" style="padding:10px;">
<div style="background:#fafafa;border:1px solid #eeeeee;border-radius:14px;padding:16px;text-align:center;">
<div style="font-size:11px;color:#888;letter-spacing:1px;margin-bottom:6px;">NOMBRE</div>
<div style="font-size:18px;font-weight:700;color:#111;">${pet.name}</div>
</div>
</td>

<td width="33%" style="padding:10px;">
<div style="background:#fafafa;border:1px solid #eeeeee;border-radius:14px;padding:16px;text-align:center;">
<div style="font-size:11px;color:#888;letter-spacing:1px;margin-bottom:6px;">ESPECIE</div>
<div style="font-size:18px;font-weight:700;color:#111;">${pet.species}</div>
</div>
</td>

<td width="33%" style="padding:10px;">
<div style="background:#fafafa;border:1px solid #eeeeee;border-radius:14px;padding:16px;text-align:center;">
<div style="font-size:11px;color:#888;letter-spacing:1px;margin-bottom:6px;">RAZA</div>
<div style="font-size:18px;font-weight:700;color:#111;">${pet.breed ?? "No especificada"}</div>
</div>
</td>

</tr>
</table>

</td>
</tr>

<!-- DESCRIPTION -->

<tr>
<td style="padding:26px 40px 0;">

<div style="background:#fafafa;border:1px solid #eeeeee;border-radius:16px;padding:22px;">

<div style="font-size:12px;color:#888;letter-spacing:2px;margin-bottom:10px;">
DESCRIPCIÓN
</div>

<div style="font-size:15px;color:#222;line-height:1.6;">
${pet.description}
</div>

</div>

</td>
</tr>

<!-- OWNER -->

<tr>
<td style="padding:26px 40px 0;">

<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:16px;padding:22px;">

<div style="font-size:12px;color:#c2410c;letter-spacing:2px;margin-bottom:12px;">
CONTACTO DEL DUEÑO
</div>

<div style="font-size:15px;font-weight:600;color:#111;">
${pet.owner_name}
</div>

<div style="font-size:14px;color:#444;margin-top:4px;">
${pet.owner_email}
</div>

<div style="font-size:14px;color:#444;margin-top:4px;">
${pet.owner_phone}
</div>

</div>

</td>
</tr>

<!-- LOCATION -->

<tr>
<td style="padding:26px 40px 0;">

<div style="background:#fafafa;border:1px solid #eeeeee;border-radius:16px;padding:22px;">

<div style="font-size:12px;color:#888;letter-spacing:2px;margin-bottom:12px;">
UBICACIÓN DEL REPORTE
</div>

<div style="font-size:14px;color:#333;">
${pet.address}
</div>

</div>

</td>
</tr>

<!-- MAP -->

<tr>
<td style="padding:30px 40px 0;">

<img src="${imageUrl}"
style="width:100%;border-radius:16px;display:block;border:1px solid #eee;">

</td>
</tr>

<!-- FOOTER -->

<tr>
<td style="padding:40px;text-align:center;border-top:1px solid #f0f0f0;margin-top:30px;">

<div style="font-size:12px;color:#888;">
Reporte generado el ${date}
</div>

<div style="font-size:12px;color:#bbb;margin-top:6px;">
PetRadar System
</div>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};
