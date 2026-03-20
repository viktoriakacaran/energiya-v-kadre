import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const sendLead = () => {
    const message = `Новая заявка:%0AИмя: ${name}%0AКонтакт: ${contact}`;
    window.open(`https://t.me/energiya_v_kadre?text=${message}`);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #2a241f, #0a0a0a)",
      color: "#f0eae1",
      fontFamily: "Georgia, serif",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        maxWidth: "1000px",
        width: "100%"
      }}>
        
        {/* ШАПКА */}
        <div style={{
          textAlign: "center",
          marginBottom: "50px"
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "48px",
            fontWeight: "normal",
            marginBottom: "10px",
            color: "#f5e6d3"
          }}>
            Здесь живут музыка, свет и кадры
          </h1>
          <p style={{
            fontSize: "22px",
            color: "#d9c9b8",
            marginBottom: "15px"
          }}>
            Виктория Кацаран — автор и креатор «Энергии в кадре»
          </p>
          <p style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto",
            color: "#c9b9a8",
            lineHeight: "1.6"
          }}>
            Мои клипы — продолжение моей музыки. Мой стиль — нежность, глубина, полёт.
          </p>
        </div>

        {/* ПЛЕЕР (SoundCloud) */}
        <div style={{
          marginBottom: "50px",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "14px",
            color: "#aa9f94",
            marginBottom: "10px"
          }}>
            Слушать музыку
          </p>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2209265600&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            style={{ borderRadius: "20px" }}
            title="SoundCloud Playlist"
          ></iframe>
          <div style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: "100",
            marginTop: "8px"
          }}>
            <a href="https://soundcloud.com/viktoriya-kaczaran" title="Виктория Кацаран" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Виктория Кацаран</a> · <a href="https://soundcloud.com/viktoriya-kaczaran/sets/energiya-v-kadre-izbrannoe" title="«Энергия в кадре — избранное»" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>«Энергия в кадре — избранное»</a>
          </div>
        </div>

        {/* ГЛАВНОЕ ВИДЕО */}
        <div style={{
          marginBottom: "60px"
        }}>
          <p style={{
            fontSize: "14px",
            color: "#aa9f94",
            marginBottom: "10px"
          }}>
            Главный проект
          </p>
          <div style={{
            aspectRatio: "16/9",
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(255,245,235,0.15)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
          }}>
            <iframe
              style={{
                width: "100%",
                height: "100%"
              }}
              src="https://www.youtube.com/embed/-uXCfT3nM20"
              title="Два мотылька"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* ДОПОЛНИТЕЛЬНЫЕ РАБОТЫ */}
        <div style={{
          marginBottom: "60px"
        }}>
          <p style={{
            fontSize: "14px",
            color: "#aa9f94",
            marginBottom: "20px"
          }}>
            Другие работы
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}>
            {[
              "GhsRHmU56ns",
              "dXpvt-sy71U",
              "6OIeCRpkn0o",
              "l4G4ZfinCus",
              "PVcf2AMQe3o",
              "9xFf-3rSxC4"
            ].map((id) => (
              <div key={id} style={{
                aspectRatio: "16/9",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255,245,235,0.1)"
              }}>
                <iframe
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Work"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        {/* УСЛУГИ */}
        <div style={{
          marginBottom: "60px"
        }}>
          <p style={{
            fontSize: "14px",
            color: "#aa9f94",
            marginBottom: "15px"
          }}>
            Что я создаю
          </p>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            {[
              "🎬 Кинематографичные клипы под ключ",
              "🌌 Атмосферные визуальные миры",
              "🎧 Музыкально‑визуальные проекты",
              "⚡ Контент для соцсетей с высокой вовлечённостью"
            ].map((text, i) => (
              <div key={i} style={{
                fontSize: "18px",
                color: "#d9c9b8"
              }}>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ФОРМА ЗАКАЗА */}
        <div style={{
          marginBottom: "60px",
          background: "rgba(255,245,235,0.05)",
          border: "1px solid rgba(255,245,235,0.12)",
          borderRadius: "30px",
          padding: "30px",
          backdropFilter: "blur(8px)"
        }}>
          <p style={{
            fontSize: "20px",
            marginBottom: "8px",
            color: "#f0e6dd"
          }}>
            Получить концепт под свой проект
          </p>
          <p style={{
            fontSize: "14px",
            color: "#b9aa9c",
            marginBottom: "20px"
          }}>
            Оставь имя и удобный контакт — я отвечу с идеей и форматом визуала под тебя
          </p>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "20px"
          }}>
            <input
              style={{
                padding: "14px 18px",
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,245,235,0.15)",
                borderRadius: "16px",
                color: "#f0e6dd",
                fontSize: "16px"
              }}
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={{
                padding: "14px 18px",
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,245,235,0.15)",
                borderRadius: "16px",
                color: "#f0e6dd",
                fontSize: "16px"
              }}
              placeholder="Контакт (Telegram, VK, MAX, телефон)"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "#f0e6dd",
              color: "#1a1510",
              border: "none",
              borderRadius: "40px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.2s"
            }}
            onClick={sendLead}
          >
            🚀 Получить идею проекта
          </button>
        </div>

        {/* КНОПКИ ПЛАТФОРМ */}
        <div style={{
          marginBottom: "50px"
        }}>
          <p style={{
            fontSize: "14px",
            color: "#aa9f94",
            marginBottom: "15px",
            textAlign: "center"
          }}>
            Где меня найти
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px"
          }}>
            {[
              { name: "YouTube", url: "https://youtube.com/@energiyavkadre" },
              { name: "Rutube", url: "https://rutube.ru/channel/72477018/" },
              { name: "TikTok", url: "https://tiktok.com/@user30499853044043" },
              { name: "Instagram", url: "https://instagram.com/vikka_tsaran" },
              { name: "MAX", url: "https://max.ru/u/f9LHodD0cOLMgsWfQ6JPqhHZRRLMOmHwPEWcvLkIlMJ9qYH-625wU_SQb_c" },
              { name: "Telegram", url: "https://t.me/energiya_v_kadre" },
              { name: "Pinterest", url: "https://ru.pinterest.com/vikka_tsaran" },
              { name: "VK", url: "https://vk.com/energiya_v_kadre" },
              { name: "VK Видео", url: "https://vkvideo.ru/@energiya_v_kadre" }
            ].map((platform, i) => (
              <a
                key={i}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 18px",
                  background: "rgba(255,245,235,0.05)",
                  border: "1px solid rgba(255,245,235,0.12)",
                  borderRadius: "40px",
                  color: "#d9c9b8",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "0.2s"
                }}
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>

        {/* ПОДВАЛ */}
        <p style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#7f7368"
        }}>
          Визуальный стиль и атмосфера, которые превращают внимание в интерес и продажи
        </p>
      </div>
    </div>
  );
}
