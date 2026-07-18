/**
 * TDS talep formu (lead capture) teslim ayarları.
 *
 * Talepler Web3Forms üzerinden e-posta olarak iletilir (sunucu gerektirmez).
 * Web3Forms ücretsizdir: https://web3forms.com adresinden Buteo'nun e-postasıyla
 * bir "Access Key" alınır ve aşağıya yapıştırılır.
 *
 * ANAHTAR BOŞSA: form yine çalışır ve kullanıcı TDS'e ulaşır, ANCAK talep
 * e-posta olarak İLETİLMEZ. Talepleri toplamak için anahtarı mutlaka girin.
 *
 * Ortam değişkeni NEXT_PUBLIC_WEB3FORMS_KEY varsa o önceliklidir.
 */
export const WEB3FORMS_ACCESS_KEY: string =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export const LEAD_RECIPIENT = "info@buteopetrokimya.com";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
