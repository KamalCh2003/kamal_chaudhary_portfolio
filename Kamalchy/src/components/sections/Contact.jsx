import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 reveal"
    >
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex items-center gap-3 text-gray-500 text-[10px] font-mono uppercase tracking-widest before:w-6 before:h-px before:bg-gray-500">
          Contact
        </div>

        <div className="mt-6 sm:mt-8 p-5 sm:p-8 md:p-12 border border-white/10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-black-500 via-white-500/5 to-transparent relative overflow-hidden">
          <div className="absolute -right-20 sm:-right-40 -top-20 sm:-top-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-black-500/10 rounded-full blur-3xl" />

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 relative z-10">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                  Let's build <span className="text-gray-400">something.</span>
                </h2>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
                  Got an idea? Let's turn it into reality together.
                </p>
              </div>

              {/* SVG Illustration – hidden on mobile, visible on sm+ */}
              <div className="hidden sm:flex items-center justify-center">
                <svg
                  viewBox="0 0 400 350"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[300px] sm:max-w-[340px] h-auto"
                >
                  <defs>
                    <linearGradient
                      id="cGrad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#7c9cff"
                        stopOpacity="0.85"
                      />
                      <stop
                        offset="100%"
                        stopColor="#b18cff"
                        stopOpacity="0.85"
                      />
                    </linearGradient>
                    <linearGradient
                      id="cGrad2"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#7c9cff"
                        stopOpacity="0.4"
                      />
                    </linearGradient>
                    <filter id="cGlow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <rect
                    x="160"
                    y="180"
                    width="80"
                    height="90"
                    rx="16"
                    fill="url(#cGrad1)"
                    opacity="0.75"
                  />
                  <circle
                    cx="200"
                    cy="145"
                    r="38"
                    fill="#67e8f9"
                    opacity="0.6"
                  />
                  <path
                    d="M 165 140 Q 200 115 235 140"
                    fill="none"
                    stroke="url(#cGrad1)"
                    strokeWidth="3"
                    opacity="0.7"
                  />
                  <circle cx="188" cy="143" r="3" fill="white" opacity="0.9" />
                  <circle cx="212" cy="143" r="3" fill="white" opacity="0.9" />
                  <path
                    d="M 190 158 Q 200 166 210 158"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.7"
                    strokeLinecap="round"
                  />

                  <rect
                    x="135"
                    y="270"
                    width="130"
                    height="85"
                    rx="6"
                    fill="url(#cGrad2)"
                    opacity="0.7"
                  />
                  <rect
                    x="142"
                    y="277"
                    width="116"
                    height="68"
                    rx="3"
                    fill="rgba(0,0,0,0.45)"
                  />
                  <rect
                    x="152"
                    y="286"
                    width="35"
                    height="5"
                    rx="2.5"
                    fill="#67e8f9"
                    opacity="0.7"
                  />
                  <rect
                    x="152"
                    y="298"
                    width="55"
                    height="5"
                    rx="2.5"
                    fill="#b18cff"
                    opacity="0.6"
                  />
                  <rect
                    x="152"
                    y="310"
                    width="25"
                    height="5"
                    rx="2.5"
                    fill="#7c9cff"
                    opacity="0.7"
                  />
                  <rect
                    x="152"
                    y="322"
                    width="45"
                    height="5"
                    rx="2.5"
                    fill="#67e8f9"
                    opacity="0.5"
                  />

                  <rect
                    x="130"
                    y="355"
                    width="140"
                    height="8"
                    rx="4"
                    fill="url(#cGrad1)"
                    opacity="0.5"
                  />
                  <rect
                    x="175"
                    y="362"
                    width="50"
                    height="3"
                    rx="1.5"
                    fill="rgba(124,156,255,0.3)"
                  />

                  <path
                    d="M 155 200 Q 135 250 145 280"
                    fill="none"
                    stroke="url(#cGrad1)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path
                    d="M 245 200 Q 265 250 255 280"
                    fill="none"
                    stroke="url(#cGrad1)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    opacity="0.6"
                  />

                  <circle
                    cx="145"
                    cy="282"
                    r="7"
                    fill="#b18cff"
                    opacity="0.6"
                  />
                  <circle
                    cx="255"
                    cy="282"
                    r="7"
                    fill="#b18cff"
                    opacity="0.6"
                  />

                  <rect
                    x="290"
                    y="240"
                    width="24"
                    height="28"
                    rx="4"
                    fill="#b18cff"
                    opacity="0.5"
                  />
                  <ellipse
                    cx="302"
                    cy="240"
                    rx="12"
                    ry="4"
                    fill="none"
                    stroke="#b18cff"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <path
                    d="M 314 248 Q 320 254 314 260"
                    fill="none"
                    stroke="#b18cff"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                  <rect
                    x="295"
                    y="245"
                    width="14"
                    height="16"
                    rx="2"
                    fill="rgba(0,0,0,0.2)"
                  />

                  <text
                    x="70"
                    y="160"
                    fontFamily="monospace"
                    fontSize="16"
                    fill="#67e8f9"
                    opacity="0.5"
                    filter="url(#cGlow)"
                  >
                    {`< />`}
                    <animate
                      attributeName="y"
                      values="160;150;160"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </text>
                  <text
                    x="290"
                    y="140"
                    fontFamily="monospace"
                    fontSize="14"
                    fill="#b18cff"
                    opacity="0.4"
                    filter="url(#cGlow)"
                  >
                    {`{ }`}
                    <animate
                      attributeName="y"
                      values="140;130;140"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </text>
                  <text
                    x="310"
                    y="190"
                    fontFamily="monospace"
                    fontSize="12"
                    fill="#7c9cff"
                    opacity="0.4"
                    filter="url(#cGlow)"
                  >
                    function
                    <animate
                      attributeName="y"
                      values="190;180;190"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </text>

                  <circle
                    cx="90"
                    cy="200"
                    r="3"
                    fill="#67e8f9"
                    opacity="0.4"
                    filter="url(#cGlow)"
                  >
                    <animate
                      attributeName="cy"
                      values="200;190;200"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="80"
                    cy="130"
                    r="2"
                    fill="#b18cff"
                    opacity="0.3"
                    filter="url(#cGlow)"
                  >
                    <animate
                      attributeName="cy"
                      values="130;120;130"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="320"
                    cy="220"
                    r="2.5"
                    fill="#7c9cff"
                    opacity="0.3"
                    filter="url(#cGlow)"
                  >
                    <animate
                      attributeName="cy"
                      values="220;210;220"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-400 leading-relaxed">
                Have an idea, project or opportunity? I'm interested in building
                useful things with people who care about the details.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                <a
                  href="mailto:kamalchy110@gmail.com"
                  className="flex justify-between py-3 border-b border-white/10 text-sm text-gray-300 hover:text-white hover:pl-2 transition-all"
                >
                  Email{" "}
                  <span className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
                    kamalchy110@gmail.com
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="https://github.com/KamalCh2003"
                  target="_blank"
                  className="flex justify-between py-3 border-b border-white/10 text-sm text-gray-300 hover:text-white hover:pl-2 transition-all"
                >
                  GitHub{" "}
                  <span className="text-gray-500 flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kamal-chaudhary-63393b288/"
                  target="_blank"
                  className="flex justify-between py-3 border-b border-white/10 text-sm text-gray-300 hover:text-white hover:pl-2 transition-all"
                >
                  LinkedIn{" "}
                  <span className="text-gray-500 flex items-center gap-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};