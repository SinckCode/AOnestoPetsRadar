import { FoundPetCDto } from "src/core/interfaces/found-pet.interfaces";
import { generateMapboxImage } from "src/core/utils/utils";

// CRON JOBS

export const generateFoundPetEmailTemplate = (pet: FoundPetCDto): string => {
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

    <body style="margin:0;padding:0;background-color:#f0f2f5;font-family:'Segoe UI',Roboto,Arial,sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5;padding:32px 0;">
            <tr>
                <td align="center">

                    <table width="600" cellpadding="0" cellspacing="0"
                        style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                        <!-- Header -->

                        <tr>
                            <td style="background:linear-gradient(135deg,#27AE60,#27AE60cc);padding:32px 40px;">
                                <table width="100%" cellpadding="0" cellspacing="0">

                                    <tr>
                                        <td>
                                            <span style="display:inline-block;background-color:rgba(255,255,255,0.2);color:#ffffff;font-size:12px;font-weight:600;padding:4px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:1px;">
                                                Mascota encontrada
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding-top:16px;">
                                            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;">
                                                Se encontró una mascota similar cerca de tu reporte
                                            </h1>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="padding-top:8px;">
                                            <span style="display:inline-block;background-color:#ffffff;color:#27AE60;font-size:13px;font-weight:700;padding:6px 16px;border-radius:20px;">
                                                ${pet.species}
                                            </span>
                                        </td>
                                    </tr>

                                </table>
                            </td>
                        </tr>

                        <!-- Description -->

                        <tr>
                            <td style="padding:32px 40px 0;">
                                <h2 style="margin:0 0 12px;font-size:14px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">
                                    Descripcion del animal encontrado
                                </h2>

                                <p style="margin:0;font-size:16px;color:#1f2937;line-height:1.6;">
                                    ${pet.description}
                                </p>
                            </td>
                        </tr>

                        <!-- Pet Info -->

                        <tr>
                            <td style="padding:24px 40px 0;">

                                <table width="100%" cellpadding="0" cellspacing="0"
                                    style="background-color:#f8f9fb;border-radius:12px;overflow:hidden;">

                                    <tr>
                                        <td style="padding:20px 24px;">

                                            <h2 style="margin:0 0 16px;font-size:14px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">
                                                Datos del animal encontrado
                                            </h2>

                                            <table width="100%" cellpadding="0" cellspacing="0">

                                                <tr>
                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Especie</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.species}</span>
                                                    </td>

                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Raza</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.breed ?? "No identificada"}</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Color</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.color}</span>
                                                    </td>

                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Tamano</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.size}</span>
                                                    </td>
                                                </tr>

                                            </table>

                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>

                        <!-- Finder Info -->

                        <tr>
                            <td style="padding:24px 40px 0;">

                                <table width="100%" cellpadding="0" cellspacing="0"
                                    style="background-color:#f0fff4;border-radius:12px;overflow:hidden;">

                                    <tr>
                                        <td style="padding:20px 24px;">

                                            <h2 style="margin:0 0 16px;font-size:14px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">
                                                Datos de quien la encontro
                                            </h2>

                                            <table width="100%" cellpadding="0" cellspacing="0">

                                                <tr>
                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Nombre</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.finder_name}</span>
                                                    </td>

                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Correo</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.finder_email}</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Telefono</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.finder_phone}</span>
                                                    </td>
                                                </tr>

                                            </table>

                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>

                        <!-- Location Info -->

                        <tr>
                            <td style="padding:24px 40px 0;">

                                <table width="100%" cellpadding="0" cellspacing="0"
                                    style="background-color:#f8f9fb;border-radius:12px;overflow:hidden;">

                                    <tr>
                                        <td style="padding:20px 24px;">

                                            <h2 style="margin:0 0 16px;font-size:14px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">
                                                Ubicacion donde fue encontrada
                                            </h2>

                                            <table width="100%" cellpadding="0" cellspacing="0">

                                                <tr>
                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Latitud</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.lat}</span>
                                                    </td>

                                                    <td width="50%" style="padding-bottom:8px;">
                                                        <span style="font-size:12px;color:#9ca3af;font-weight:500;">Longitud</span><br/>
                                                        <span style="font-size:15px;color:#1f2937;font-weight:600;">${pet.lon}</span>
                                                    </td>
                                                </tr>

                                            </table>

                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>

                        <!-- Map Image -->

                        <tr>
                            <td style="padding:24px 40px;">
                                <img src="${imageUrl}" width="520"
                                style="width:100%;border-radius:12px;display:block;"
                                alt="Mapa de ubicacion"/>
                            </td>
                        </tr>

                        <!-- Footer -->

                        <tr>
                            <td style="padding:0 40px 32px;">
                                <table width="100%" cellpadding="0" cellspacing="0"
                                    style="border-top:1px solid #e5e7eb;padding-top:20px;">

                                    <tr>
                                        <td>
                                            <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.5;">
                                                Reporte generado el ${date}
                                            </p>

                                            <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">
                                                Sistema PetRadar
                                            </p>
                                        </td>
                                    </tr>

                                </table>
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
