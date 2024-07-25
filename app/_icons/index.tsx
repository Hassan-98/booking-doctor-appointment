import { IIcon } from "../_interfaces";

export const Search: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 6a5 5 0 0 1 5 5m.659 5.655L21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>
);

export const Dentist: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <style>{".st0{fill:#367bf4}"}</style>
    <path
      d="m115.661 133.014 38.064-10.084c1.112-.214 1.902-1.208 1.902-2.35 0-1.141-.79-2.136-1.902-2.351l-38.064-10.083a2.682 2.682 0 0 1-2.018-2.028l-10.046-38.055a2.46 2.46 0 0 0-2.389-1.902c-1.141 0-2.126.79-2.39 1.902l-10.036 38.055a2.707 2.707 0 0 1-2.028 2.028L48.69 118.229c-1.113.215-1.903 1.21-1.903 2.351 0 1.142.79 2.136 1.903 2.35l38.064 10.084a2.691 2.691 0 0 1 2.028 2.028l10.036 38.055a2.46 2.46 0 0 0 2.39 1.902c1.14 0 2.125-.79 2.389-1.902l10.046-38.055a2.666 2.666 0 0 1 2.018-2.028zM462.695 68.785l-50.283-13.322c-1.317-.292-2.39-1.346-2.672-2.672L396.476 2.507A3.255 3.255 0 0 0 393.316 0a3.254 3.254 0 0 0-3.16 2.507L376.902 52.79a3.57 3.57 0 0 1-2.682 2.672l-50.284 13.322c-1.473.292-2.516 1.599-2.516 3.111s1.044 2.818 2.516 3.101l50.284 13.332c1.317.273 2.38 1.346 2.682 2.672l13.254 50.274a3.252 3.252 0 0 0 3.16 2.516 3.254 3.254 0 0 0 3.16-2.516L409.739 91c.282-1.326 1.355-2.4 2.672-2.672l50.283-13.332c1.473-.283 2.517-1.589 2.517-3.101s-1.043-2.818-2.516-3.11zM369.529 173.448c-44.842-34.651-80.517-8.153-113.149-8.153-32.612 0-68.296-26.498-113.139 8.153C98.399 208.1 98.029 278.152 124.897 360.99c24.459 75.427 41.819 110.634 44.852 126.793 6.115 32.622 44.843 32.622 52.996-2.038 4.427-18.822 3.072-86.026 33.636-86.026 30.584 0 29.219 67.205 33.647 86.026 8.153 34.66 46.88 34.66 52.995 2.038 3.033-16.159 20.393-51.366 44.852-126.793 26.868-82.838 26.497-152.89-18.346-187.542zM252.43 258.89l-36.318 9.626c-.946.194-1.726.974-1.93 1.93l-9.587 36.309a2.328 2.328 0 0 1-2.272 1.814 2.328 2.328 0 0 1-2.273-1.814l-9.586-36.309c-.214-.956-.986-1.736-1.931-1.93l-36.318-9.626c-1.064-.204-1.814-1.16-1.814-2.243 0-1.092.751-2.038 1.814-2.243l36.318-9.626a2.567 2.567 0 0 0 1.931-1.93l9.586-36.309a2.328 2.328 0 0 1 2.273-1.814c1.092 0 2.028.751 2.272 1.814l9.587 36.309a2.55 2.55 0 0 0 1.93 1.93l36.318 9.626c1.064.205 1.815 1.151 1.815 2.243 0 1.083-.751 2.039-1.815 2.243z"
      className="st0"
    />
  </svg>
);

export const Heart: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <path
      fill="#367bf4"
      fillRule="evenodd"
      d="M8.962 19.37C6.019 16.972 2 13.009 2 9.26 2 3.35 7.5.663 12 5.5 16.5.663 22 3.349 22 9.26c0 3.748-4.02 7.711-6.962 10.11C13.706 20.458 13.04 21 12 21c-1.04 0-1.706-.543-3.038-1.63Zm1.131-8.624c.09-.128.164-.234.23-.325.056.098.119.211.194.348l1.71 3.11c.166.302.33.598.493.813.175.23.482.545.975.555.493.009.813-.295.996-.518.172-.209.345-.498.523-.794l.055-.093c.221-.367.36-.598.483-.764.113-.153.179-.203.228-.23.049-.028.125-.059.315-.077.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027-.311.03-.614.097-.91.264a2.222 2.222 0 0 0-.694.644c-.171.231-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377-1.709-3.108c-.154-.28-.307-.56-.463-.765-.17-.223-.462-.52-.93-.544-.467-.026-.789.237-.982.441-.177.187-.36.448-.543.71l-.31.442c-.227.325-.37.527-.493.673-.113.134-.176.178-.223.202-.046.025-.118.051-.293.067-.19.017-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024.29-.027.571-.085.85-.23.28-.146.489-.343.676-.565.173-.204.354-.463.559-.756l.3-.429Z"
      clipRule="evenodd"
    />
  </svg>
);

export const Bones: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <path
      fill="#367bf4"
      d="M2 12C2 7.286 2 4.93 3.464 3.465c1.177-1.177 2.93-1.408 6.017-1.454v2.05c0 .556-.476.998-.96 1.272-.915.519-1.56 1.707-1.56 2.758a2.519 2.519 0 1 0 5.039 0 2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.757-.484-.275-.96-.717-.96-1.273V2.01c3.088.046 4.84.277 6.016 1.454C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536c-1.171 1.171-2.914 1.405-5.978 1.452v-2.003c0-.557.476-.999.96-1.273.915-.518 1.559-1.706 1.559-2.758a2.519 2.519 0 0 0-5.038 0 2.519 2.519 0 0 0-5.038 0c0 1.052.644 2.24 1.558 2.758.485.274.961.716.961 1.273v2.005c-3.111-.045-4.873-.273-6.055-1.454C2 19.07 2 16.714 2 12Z"
    />
  </svg>
);

export const Brain: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <style>{".st0{fill:#367bf4}"}</style>
    <path
      d="M504.556 297.257a49.966 49.966 0 0 0-19.446-18.003c-1.687-.89-3.531-1.694-5.498-2.426h-.28c-2.326 0-4.551-.703-6.424-2.003a50.061 50.061 0 0 0-10.711-1.156c-11.499 0-22.288 3.804-31.211 10.997a11.316 11.316 0 0 1-7.084 2.505 11.25 11.25 0 0 1-8.801-4.2 11.196 11.196 0 0 1-2.44-8.291 11.223 11.223 0 0 1 4.134-7.602c12.792-10.322 28.907-16.007 45.381-16.007a71.99 71.99 0 0 1 15.663 1.723c9.648-7.638 15.749-18.47 17.271-30.759a46.71 46.71 0 0 0 .366-5.822c0-11.255-4.121-22.166-11.607-30.694a46.607 46.607 0 0 0-29.295-15.506 45.206 45.206 0 0 0-4.156-.33 79.366 79.366 0 0 1-3.18 3.403c-4.451 4.479-9.935 8.542-16.775 12.44-5.154 2.922-10.998 5.678-17.365 8.191-11.032 4.343-19.675 6.417-19.761 6.432-.833.201-1.723.302-2.613.302a11.272 11.272 0 0 1-10.982-8.629 11.208 11.208 0 0 1 1.342-8.542 11.17 11.17 0 0 1 6.762-5.046l.222-.05 2.053 5.334-1.414-5.506 2.032-.553a161.402 161.402 0 0 0 7.465-2.332c5.527-1.888 13.674-5.025 21.097-9.246 4.896-2.778 9.009-5.786 11.88-8.685a62.146 62.146 0 0 0 4.788-5.477l.732-.905c7.056-9.324 11.14-21.046 11.133-32.582-.014-11.916-4.221-22.92-12.167-31.836a49.894 49.894 0 0 0-37.17-16.632 49.697 49.697 0 0 0-33.142 12.648 11.296 11.296 0 0 1-15.958-.911 11.266 11.266 0 0 1-2.85-8.155 11.246 11.246 0 0 1 3.755-7.789 72.405 72.405 0 0 1 16.15-10.918 49.662 49.662 0 0 0-14.141-28.591c-9.411-9.411-21.915-14.587-35.21-14.593-13.302.006-25.806 5.182-35.216 14.593-9.404 9.404-14.579 21.916-14.586 35.209v81.187h46.4c6.23 0 11.298 5.075 11.298 11.298 0 6.23-5.068 11.299-11.298 11.299h-46.4v55.74c13.459.631 24.844 2.434 34.685 5.477 11.736 3.61 21.377 9.167 28.634 16.496 4.286 4.328 7.903 9.439 10.76 15.19 3.712 7.515 5.7 15.167 7.021 20.996.725 3.231 1.357 6.424 1.967 9.54 1.048 5.276 2.031 10.258 3.338 14.672 1.199 4.063 2.562 7.321 4.185 9.97 2.003 3.302 4.422 5.786 7.594 7.839 4.516 2.886 10.473 4.781 18.205 5.786a11.2 11.2 0 0 1 7.486 4.278 11.265 11.265 0 0 1 2.276 8.356c-.732 5.628-5.549 9.863-11.198 9.863l-1.465-.101c-9.454-1.214-17.314-3.553-24.04-7.142-6.403-3.403-11.751-8.026-15.885-13.718-2.412-3.288-4.422-6.927-6.152-11.098-1.788-4.307-3.202-8.951-4.594-15.06-.711-3.158-1.328-6.317-1.946-9.447-.632-3.187-1.256-6.352-1.974-9.439-2.068-9.03-4.516-15.24-7.947-20.135-2.326-3.338-5.132-6.138-8.592-8.557-4.695-3.273-10.488-5.778-17.709-7.659-6.97-1.816-15.239-2.994-24.65-3.489v207.346c.007 13.294 5.183 25.806 14.579 35.217 9.418 9.404 21.922 14.579 35.224 14.586 13.294-.006 25.798-5.182 35.21-14.586 9.404-9.418 14.586-21.923 14.586-35.217.007-7.2-1.967-15.103-5.427-21.686-3.934-7.531-9.411-13.086-16.266-16.532-5.298-2.641-11.162-3.933-17.931-3.948-6.224 0-11.292-5.061-11.292-11.284 0-6.239 5.068-11.306 11.298-11.306 7.717 0 15.039 1.228 21.765 3.654a56.954 56.954 0 0 1 17.235 9.863c8.973 7.501 15.786 17.788 19.705 29.746 2.297 7.028 3.503 14.457 3.503 21.492a72.323 72.323 0 0 1-1.916 16.625c5.212 1.78 10.732 2.713 16.187 2.713a49.731 49.731 0 0 0 33.049-12.591 49.895 49.895 0 0 0 16.704-37.226 49.897 49.897 0 0 0-3.18-17.544c-2.139-5.693-5.312-10.926-9.411-15.541-4.135-4.659-3.712-11.809.933-15.95a11.3 11.3 0 0 1 7.508-2.85c3.23 0 6.31 1.378 8.456 3.797l.783.897.517.087c.352.05.574.071 1.098.093.459.007 1.098.014 1.981.014 13.294-.007 25.806-5.183 35.218-14.586 9.403-9.418 14.579-21.922 14.586-35.217a49.795 49.795 0 0 0-7.444-26.208zM194.906 11.453c-13.302.006-25.806 5.182-35.217 14.593a49.682 49.682 0 0 0-14.141 28.584 72.612 72.612 0 0 1 16.144 10.918l.797.783.826.947 1.658 1.823a233.02 233.02 0 0 0 6.352 6.618c4.831 4.853 12.232 11.845 20.078 17.637 5.204 3.848 10.078 6.762 14.112 8.435 2.8 1.163 4.752 1.557 5.9 1.687 3.008.337 5.7 1.823 7.58 4.177a11.187 11.187 0 0 1 2.404 8.306 11.285 11.285 0 0 1-11.219 10.05l-1.249-.071c-3.862-.431-7.81-1.508-12.074-3.281-3.546-1.472-7.164-3.366-11.077-5.8-6.137-3.826-12.763-8.88-19.69-15.01-10.142-8.987-17.902-17.587-19.898-19.841a49.773 49.773 0 0 0-32.697-12.253c-14.178.007-27.723 6.066-37.155 16.632a49.693 49.693 0 0 0-12.655 33.142 49.78 49.78 0 0 0 6.022 23.739h.136c3.726 0 7.473.28 11.127.847 6.166.962 10.394 6.74 9.446 12.892-.869 5.549-5.556 9.576-11.155 9.576-.574 0-1.163-.044-1.751-.13a49.419 49.419 0 0 0-7.667-.588c-.596 0-1.184.007-1.788.021-12.964.467-25.081 5.872-34.097 15.225-8.987 9.332-13.933 21.592-13.933 34.513 0 .596.007 1.199.022 1.802.473 13.345 6.324 25.936 16.151 34.944a72.604 72.604 0 0 1 13.603-1.299c16.496 0 32.611 5.685 45.396 16.007l1.12 1.02.855.962c.388.423.983 1.047 1.766 1.838a105.914 105.914 0 0 0 7.121 6.539c5.549 4.652 14.342 11.062 24.773 15.204 7.113 2.821 14.112 4.25 20.796 4.25 6.23 0 11.298 5.067 11.298 11.298s-5.068 11.299-11.298 11.299c-9.584-.008-19.382-1.974-29.13-5.85-7.581-3.014-15.154-7.179-22.518-12.383-10.229-7.242-17.25-14.514-19.604-17.092-8.807-6.862-19.367-10.494-30.572-10.494-8.075 0-15.785 1.874-22.913 5.585a50.02 50.02 0 0 0-19.446 18.003c-4.86 7.846-7.436 16.912-7.444 26.215.008 13.287 5.183 25.792 14.586 35.209 9.411 9.404 21.922 14.579 35.217 14.586 1.644 0 2.434-.007 3.094-.078l.445-.058.84-.955a11.302 11.302 0 0 1 8.456-3.797c2.764 0 5.427 1.005 7.501 2.85a11.233 11.233 0 0 1 3.776 7.788 11.222 11.222 0 0 1-2.842 8.162c-4.092 4.615-7.264 9.856-9.404 15.548a49.701 49.701 0 0 0-3.18 17.537 49.932 49.932 0 0 0 16.696 37.226 49.764 49.764 0 0 0 33.056 12.591c5.456 0 10.976-.933 16.187-2.713a72.464 72.464 0 0 1-1.917-16.625c0-8.995 1.91-18.276 5.513-26.868 4.049-9.662 10.164-18.083 17.688-24.356a11.32 11.32 0 0 1 7.235-2.627c3.368 0 6.525 1.479 8.679 4.063 3.977 4.781 3.338 11.916-1.435 15.908-4.76 3.962-8.679 9.404-11.342 15.756-2.419 5.764-3.754 12.203-3.747 18.126 0 13.294 5.182 25.798 14.586 35.217 9.411 9.404 21.916 14.579 35.217 14.586 13.294-.006 25.806-5.182 35.217-14.586 9.396-9.411 14.572-21.923 14.579-35.217v-90.54h-42.166c-6.223 0-11.291-5.061-11.291-11.292 0-6.23 5.068-11.299 11.291-11.299h42.166v-68.668a36.783 36.783 0 0 0-15.334-3.38c-3.718 0-7.436.574-11.047 1.694-9.447 3.266-18.972 4.96-28.139 4.96-17.45 0-33.35-6.202-44.864-17.458-10.948-10.681-17.236-25.411-17.242-40.421-.007-13.344 4.751-26.1 13.782-36.889a11.243 11.243 0 0 1 8.671-4.056c2.642 0 5.212.934 7.236 2.627 4.781 3.999 5.42 11.127 1.436 15.908-5.642 6.776-8.513 14.32-8.52 22.418 0 8.937 3.797 17.78 10.422 24.248 7.408 7.2 17.465 11.012 29.087 11.026 6.676 0 13.76-1.285 21.046-3.811 6.123-1.924 12.11-2.836 18.14-2.836 5.204 0 10.33.675 15.326 2.032V61.256c-.008-13.294-5.183-25.806-14.579-35.209-9.411-9.412-21.923-14.587-35.217-14.594z"
      className="st0"
    />
  </svg>
);

export const Ear: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={800}
  height={800}
  aria-hidden="true"
  viewBox="0 0 512 512"
  className={`${className} w-full h-full`}
  {...rest}
  >
    <path
      fill="#367bf4"
      d="M409.8 175.2c0-85-68.9-153.9-153.9-153.9S102.1 90.2 102.1 175.2c0 14.5 2 28.6 5.8 41.9 3.2 25.1 6.5 55.6 6.5 74.3 0 36 1.8 92.8 1.8 92.8-10 63.8 38.3 105.9 103 105.9s96.8-44.5 117-105.9c1.7-5.3 2.9-10.4 3.6-15.5 20.3-75.6 70-87.1 70-193.5z"
    />
    <path
      fill="#0317b0"
      d="M256 58.1c-63.8 0-115.7 51.9-115.7 115.7 0 33.2 17.1 58.6 36.3 84 1.5 1.9 3.7 2.9 5.9 2.9 1.6 0 3.1-.5 4.4-1.5 3.3-2.5 3.9-7.1 1.4-10.4-17.5-23.2-33.3-46.4-33.3-75 0-55.6 45.3-100.9 100.9-100.9s100.9 45.3 100.9 100.9c0 55.5-9.9 72.7-24.8 98.7-12.8 22.2-28.7 49.9-44.6 109.8-1 3.9 1.3 8 5.2 9 .6.2 1.3.2 1.9.2 3.3 0 6.3-2.2 7.1-5.5 15.4-58 30.8-84.8 43.1-106.3 15.5-27 26.8-46.6 26.8-106C371.6 110 319.7 58.1 256 58.1z"
    />
    <path
      fill="#0317b0"
      d="M258.1 256.2c-.6 0-7.7-.4-14.7-4-9.4-4.8-13.9-12.9-13.9-24.7 0-4.1-3.3-7.4-7.4-7.4s-7.4 3.3-7.4 7.4c0 21.9 12 32.7 22 37.8 10.4 5.3 20.7 5.6 21.2 5.6h.2c10.8 0 19.6 8.8 19.6 19.6s-8.8 19.6-19.6 19.6h-24.9c-25.1 0-37.2 14.1-37.2 43.1v61.4c0 4.7-3.8 8.5-8.5 8.5s-8.5-3.8-8.5-8.5V372c0-4.1-3.3-7.4-7.4-7.4s-7.4 3.3-7.4 7.4v42.7c0 12.9 10.5 23.3 23.3 23.3s23.3-10.5 23.3-23.3v-61.4c0-26.1 10.6-28.3 22.4-28.3H258c19 0 34.4-15.4 34.4-34.4 0-18.9-15.4-34.3-34.3-34.4z"
    />
  </svg>
);
export const Doctor: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="_x32_"
    width={800}
    height={800}
    viewBox="0 0 512 512"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <style>{".st0{fill:#367bf4}"}</style>
    <path
      d="M110.547 411.844c-5.234 5.813-9.141 12.5-11.328 19.266-1.531 4.766-2.266 9.469-2.266 13.875 0 2.688.266 5.25.844 7.672.438 1.797 1.031 3.516 1.828 5.094a17.734 17.734 0 0 0 2.156 3.375c1.266 1.531 2.828 2.859 4.688 3.781a13.367 13.367 0 0 0 6.125 1.422v-9.766c-.453 0-.797-.063-1.125-.156-.578-.156-1.047-.422-1.578-.891a6.66 6.66 0 0 1-1.156-1.469c-.563-.922-1.094-2.203-1.453-3.734-.359-1.547-.563-3.344-.563-5.328 0-3.297.578-7.047 1.797-10.891 1.141-3.531 2.953-7.188 5.328-10.656 3.547-5.219 8.391-9.984 13.984-13.391 2.781-1.703 5.781-3.078 8.891-4.016a33.858 33.858 0 0 1 9.766-1.438c4.5 0 8.813.906 12.844 2.531 6.031 2.406 11.484 6.453 15.844 11.281 4.344 4.813 7.578 10.406 9.266 15.688 1.234 3.844 1.813 7.594 1.813 10.891 0 2.016-.219 3.844-.594 5.391-.266 1.156-.641 2.188-1.047 3a8.337 8.337 0 0 1-.984 1.547c-.5.609-1 1-1.484 1.25-.5.234-1.016.375-1.766.391v9.766a13.646 13.646 0 0 0 3.75-.5c2.109-.578 4-1.672 5.547-3.094a16.208 16.208 0 0 0 2.922-3.609c1.219-2 2.063-4.219 2.609-6.594s.813-4.906.813-7.547c0-4.406-.734-9.125-2.266-13.875-1.453-4.516-3.672-8.984-6.547-13.188-4.313-6.297-10.063-12.016-16.969-16.234-3.453-2.094-7.188-3.813-11.172-5a42.901 42.901 0 0 0-12.578-1.875c-5.828 0-11.391 1.188-16.469 3.234-7.642 3.062-14.236 8-19.47 13.797z"
      className="st0"
    />
    <path
      d="M165.594 452.109a6.65 6.65 0 0 0-2.531 5.219v7.891c0 2.031.938 3.953 2.531 5.219 1.594 1.25 3.688 1.719 5.656 1.25l5.266-1.25v-18.344l-5.266-1.25a6.644 6.644 0 0 0-5.656 1.265zM121.719 450.844l-5.281 1.25v18.344l5.281 1.25c1.969.469 4.063 0 5.656-1.25a6.674 6.674 0 0 0 2.531-5.219v-7.891c0-2.047-.938-3.953-2.531-5.219s-3.687-1.734-5.656-1.265z"
      className="st0"
    />
    <path
      d="M453.453 429.594c-2.016-7.531-4.859-14.281-8.359-20.281-6.141-10.547-14.266-18.75-23.234-25.25-6.734-4.875-13.922-8.859-21.234-12.281-10.953-5.125-22.156-9.063-32.5-12.891-10.344-3.813-19.797-7.547-27.156-11.891-2.688-1.594-5.109-3.25-7.203-4.984-3.125-2.609-5.563-5.391-7.328-8.5s-2.953-6.609-3.406-10.984a84.644 84.644 0 0 1-.469-8.875c0-8.281 1.219-15.453 2.781-22.781 4.625-5.219 8.859-11.438 12.859-18.875 4.016-7.484 7.828-16.219 11.625-26.563a48.963 48.963 0 0 0 7.281-4.063c5.469-3.656 10.656-8.781 14.984-15.609 4.313-6.828 7.781-15.313 10.156-25.781.656-2.906.969-5.797.969-8.641.016-5.938-1.391-11.594-3.75-16.656a44.824 44.824 0 0 0-6.141-9.656 233.2 233.2 0 0 0 4.078-17.891c1.844-9.984 3.375-21.984 3.375-34.594 0-8.141-.641-16.547-2.297-24.844-1.234-6.219-3.063-12.391-5.625-18.297-3.859-8.891-9.469-17.25-17.266-24.156-7.219-6.391-16.266-11.484-27.188-14.75-3.859-4.625-7.734-8.563-11.703-11.906-3.438-2.875-6.953-5.297-10.547-7.281-5.406-3-11-4.984-16.734-6.188s-11.578-1.641-17.641-1.641c-8.359 0-17.156.828-26.875 1.781-3.672.375-6.75.828-9.422 1.297-3.984.719-6.969 1.453-9.359 1.938-1.203.234-2.25.422-3.281.547a29.19 29.19 0 0 1-3.172.188c-1.531 0-3.297-.125-5.609-.453a126.351 126.351 0 0 1-18.625-4.188 96.754 96.754 0 0 1-6.438-2.188 73.388 73.388 0 0 1-2.203-.875c-.609-.25-1.063-.484-1.328-.609l.016.016a7.832 7.832 0 0 0-2.203-.75A7.637 7.637 0 0 0 181.5 0c-1.078 0-1.844.156-2.453.313s-1.078.344-1.5.516a14.04 14.04 0 0 0-2.063 1.047 35.886 35.886 0 0 0-3.391 2.344c-2.016 1.563-4.234 3.5-6.594 5.781-3.531 3.406-7.313 7.531-10.75 12.031-1.719 2.234-3.328 4.578-4.781 7s-2.734 4.906-3.75 7.516c-4.969 12.922-8.25 24.828-10.281 35.813-2.047 10.984-2.828 21.047-2.828 30.281 0 15.109 2.109 27.922 4.141 38.75 0 .516.016 1 .047 1.516.063 1.016.172 2.063.281 3.156.172 1.625.359 3.297.5 4.703.078.703.141 1.328.188 1.813.016.234.031.453.031.609l.016.156V154.33l1.984 8.828c-2.859 3.125-5.328 6.625-7.25 10.469-2.688 5.344-4.281 11.375-4.281 17.75 0 2.813.328 5.719.984 8.609 1.563 6.984 3.641 13.078 6.125 18.391 3.719 7.984 8.438 14.188 13.656 18.844 4.047 3.625 8.375 6.266 12.656 8.219 3.781 10.344 7.594 19.063 11.609 26.547 4 7.453 8.219 13.656 12.844 18.875 1.563 7.328 2.781 14.516 2.797 22.797 0 2.813-.156 5.75-.484 8.875-.313 3-.969 5.594-1.922 7.938-1.422 3.5-3.5 6.484-6.328 9.313-2.828 2.781-6.438 5.391-10.703 7.813-4.328 2.453-9.344 4.75-14.797 6.938-9.563 3.875-20.469 7.531-31.516 11.953-8.281 3.297-16.672 7.063-24.672 11.766-6 3.531-11.766 7.625-17.078 12.484-7.953 7.281-14.813 16.359-19.547 27.578-4.75 11.234-7.391 24.531-7.375 40.25 0 2.219.469 4.328 1.234 6.281.703 1.828 1.688 3.5 2.844 5.094 2.188 2.969 5 5.625 8.453 8.188 6.063 4.469 14.109 8.656 24.531 12.594 15.625 5.891 36.563 11.188 63.641 15.031 27.063 3.844 60.266 6.25 100.266 6.25 34.703 0 64.266-1.797 89.156-4.781 18.656-2.25 34.703-5.156 48.313-8.484 10.219-2.484 19.078-5.219 26.672-8.094 5.688-2.156 10.688-4.406 15.031-6.719 3.25-1.734 6.125-3.516 8.672-5.344 3.813-2.766 6.875-5.609 9.203-8.844a21.785 21.785 0 0 0 2.828-5.203c.703-1.844 1.125-3.875 1.125-5.969 0-10.754-1.234-20.364-3.531-28.973zm-126.187-71.5-50.156 78.328-5.594-38.453 14.234-15.063-9.219-15.375 38.906-20.453a48.816 48.816 0 0 0 3.422 3.953c2.579 2.641 5.407 4.969 8.407 7.063zM183.078 87.156c45.219 10.031 133.641-9.141 133.641-9.141s.953 21.922 16.031 42.047c5.938 7.906 10.828 20.266 14.5 32.016-.984-1.828-3.297-2.516-6.75-2.953-7.75-1.047-19.266-1.719-32.234-1.094-38.531 1.891-35.672 5.391-50.797 5.391s-12.266-3.5-50.797-5.391c-12.969-.625-24.484.047-32.25 1.094-4.031.531-6.563 1.344-7.141 4.031-.203 1-.516 2.125-1.906 2.672 4.266-15.937 16.141-36.297 17.703-68.672zm156.844 89.313c0 .219-.156 22.313-15.188 29.859-5.109 2.578-11.516 4-18.031 4.016-6.875 0-13.156-1.563-18.172-4.516-5.547-3.25-9.281-8.078-11.109-14.313-.438-1.453-.828-2.906-1.234-4.313-1.188-4.297-4.391-16.234 2.406-21.484 4.375-3.422 17.953-5.578 30.969-5.578 11.828 0 23.891 1.609 27.422 5.297 2.328 2.438 3.234 6.782 2.937 11.032zM238.75 187.203c-.406 1.406-.813 2.859-1.234 4.313-1.828 6.234-5.563 11.063-11.094 14.313-5.031 2.953-11.313 4.516-18.188 4.516-6.516-.016-12.906-1.438-18.031-4.016-15.031-7.547-15.172-29.641-15.188-29.859-.297-4.25.609-8.594 2.922-11.031 3.547-3.688 15.609-5.297 27.438-5.297 13 0 26.594 2.156 30.984 5.578 6.782 5.249 3.579 17.186 2.391 21.483zm-50.203 76.86c-3.922-7.313-7.828-16.406-11.844-27.75l-1.328-3.703-3.688-1.359c-2.563-.938-5.063-2.156-7.453-3.766-3.609-2.422-7.031-5.734-10.172-10.672s-5.953-11.563-7.984-20.516a21.769 21.769 0 0 1-.547-4.922c0-3.594.859-7 2.5-10.25 1.344-2.703 3.219-5.25 5.5-7.563 3.844 5.813 7.031 10.422 8.188 11.578 2.203 2.203 3.297.078 3.469-4.047 1.359 9.172 5.719 24.313 19.797 31.797 20.266 10.766 50.516 6.734 60.781-17.234 4.641-10.813 4.703-21.375 11.703-21.375 6.984 0 7.063 10.563 11.703 21.375 10.281 23.969 40.531 28 60.797 17.234 20.25-10.766 20.391-37.422 20.391-39.297 0-.969.922-1.703 2.234-1.844 1.719 7.234 2.609 12.141 2.609 12.141s1.938-3.703 4.844-8.641c1.734 2.031 3.172 4.219 4.234 6.5 1.422 3.063 2.188 6.266 2.188 9.594 0 1.609-.172 3.25-.563 4.938-1.344 5.969-3.047 10.906-4.953 15-2.875 6.125-6.188 10.344-9.656 13.438-3.453 3.094-7.141 5.109-10.969 6.531l-3.703 1.344-1.313 3.719c-4.016 11.344-7.938 20.453-11.859 27.75-3.938 7.313-7.844 12.813-11.906 17.094l-1.609 1.703-.5 2.266c-1.813 8.359-3.625 17.594-3.625 28.531 0 3.375.172 6.891.547 10.594.453 4.344 1.453 8.422 2.938 12.172.063.172.156.359.219.516l-50.891 26.766-56.406-26.172c1.734-4.063 2.906-8.5 3.406-13.281.391-3.703.547-7.219.547-10.594.016-10.938-1.797-20.188-3.625-28.547l-.5-2.266-1.609-1.688c-4.048-4.313-7.97-9.782-11.892-17.094zm-.453 91.531c2.938-2.359 5.641-5 8.031-7.969l43.016 19.969-9.188 15.313 14.219 15.063-5.25 36.203-54.875-75.609a71.883 71.883 0 0 0 4.047-2.97zM440.219 458.5c-.016.094-.125.406-.422.906-.563.969-1.875 2.531-4.094 4.313-1.922 1.547-4.516 3.281-7.781 5.063-5.734 3.141-13.5 6.406-23.344 9.5-14.781 4.656-34.297 8.906-58.922 12-24.625 3.063-54.359 4.969-89.672 4.969-34.094 0-63-1.781-87.125-4.672-18.094-2.172-33.5-4.984-46.344-8.109-9.656-2.359-17.875-4.906-24.703-7.5-5.141-1.938-9.5-3.906-13.078-5.828-2.688-1.438-4.953-2.859-6.797-4.172-2.75-1.969-4.5-3.766-5.375-5-.438-.594-.656-1.063-.734-1.281a.491.491 0 0 1-.063-.188c0-9.375 1.063-17.406 2.906-24.375 1.609-6.094 3.828-11.391 6.531-16.078 4.719-8.203 10.922-14.641 18.297-20.063 5.5-4.078 11.672-7.563 18.203-10.672 7.328-3.484 15.109-6.484 22.922-9.375v16.875h11.718V373.61c7.469-2.797 14.75-5.672 21.531-9.109l86.703 119.453 75.75-118.266c.234.359.469.719.688 1.063 3.156 5.078 5.359 10.609 6.828 16.875 1.453 6.25 2.125 13.25 2.125 21.047v44.391H318.75v11.734h67v-11.734h-27.219v-44.391c0-11.359-1.297-21.703-4.516-31.141a62.442 62.442 0 0 0-.891-2.422c9.156 3.609 18.734 6.859 28.016 10.547 7.953 3.141 15.672 6.578 22.688 10.656 5.281 3.063 10.172 6.5 14.516 10.406 6.516 5.922 11.859 12.906 15.703 21.859 3.828 8.938 6.172 19.938 6.172 33.922z"
      className="st0"
    />
  </svg>
);

export const TwitterIcon: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const LinkedInIcon: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`${className} w-full h-full`}
    {...rest}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const FaceBook: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Facebook"
    viewBox="0 0 512 512"
    {...rest}
    className={`${className} w-full h-full`}
  >
    <rect width={512} height={512} fill="#1877f2" rx="15%" />
    <path
      fill="#fff"
      d="m355.6 330 11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z"
    />
  </svg>
);

export const TikTok: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 250 250"
    {...rest}
    className={`${className} w-full h-full`}
  >
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        fill="#010101"
        d="M25 0h200c13.808 0 25 11.192 25 25v200c0 13.808-11.192 25-25 25H25c-13.808 0-25-11.192-25-25V25C0 11.192 11.192 0 25 0z"
      />
      <path
        fill="#ee1d51"
        d="M156.98 230c7.607 0 13.774-6.117 13.774-13.662s-6.167-13.663-13.774-13.663h-2.075c7.607 0 13.774 6.118 13.774 13.663S162.512 230 154.905 230z"
      />
      <path
        fill="#66c8cf"
        d="M154.717 202.675h-2.075c-7.607 0-13.775 6.118-13.775 13.663S145.035 230 152.642 230h2.075c-7.608 0-13.775-6.117-13.775-13.662s6.167-13.663 13.775-13.663z"
      />
      <ellipse cx={154.811} cy={216.338} fill="#010101" rx={6.699} ry={6.643} />
      <path
        fill="#fff"
        d="M50 196.5v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm66.415 0v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm-39.81 3.93c0-2.17 1.771-3.93 3.959-3.93 2.19 0 3.963 1.76 3.963 3.93s-1.772 3.93-3.963 3.93c-2.188-.001-3.959-1.76-3.959-3.93zm0 6.738h7.922v22.645h-7.922zM87.924 196.5v33.313h7.925v-8.608l2.453-2.248L106.037 230h8.49l-11.133-16.095 10-9.733h-9.622l-7.923 7.86V196.5zm85.47 0v33.313h7.926v-8.608l2.452-2.248L191.509 230H200l-11.133-16.095 10-9.733h-9.622l-7.925 7.86V196.5z"
      />
      <path
        fill="#ee1d52"
        d="M161.167 81.186c10.944 7.819 24.352 12.42 38.832 12.42V65.755a39.26 39.26 0 0 1-8.155-.853v21.923c-14.479 0-27.885-4.601-38.832-12.42v56.835c0 28.432-23.06 51.479-51.505 51.479-10.613 0-20.478-3.207-28.673-8.707C82.187 183.57 95.23 189.5 109.66 189.5c28.447 0 51.508-23.047 51.508-51.48V81.186zm10.06-28.098c-5.593-6.107-9.265-14-10.06-22.726V26.78h-7.728c1.945 11.09 8.58 20.565 17.788 26.308zm-80.402 99.107a23.445 23.445 0 0 1-4.806-14.256c0-13.004 10.548-23.547 23.561-23.547a23.6 23.6 0 0 1 7.147 1.103V87.022a51.97 51.97 0 0 0-8.152-.469v22.162a23.619 23.619 0 0 0-7.15-1.103c-13.013 0-23.56 10.543-23.56 23.548 0 9.195 5.272 17.157 12.96 21.035z"
      />
      <path
        fill="#fff"
        d="M153.012 74.405c10.947 7.819 24.353 12.42 38.832 12.42V64.902c-8.082-1.72-15.237-5.942-20.617-11.814-9.208-5.743-15.843-15.218-17.788-26.308H133.14v111.239c-.046 12.968-10.576 23.468-23.561 23.468-7.652 0-14.45-3.645-18.755-9.292-7.688-3.878-12.96-11.84-12.96-21.035 0-13.005 10.547-23.548 23.56-23.548 2.493 0 4.896.388 7.15 1.103V86.553c-27.945.577-50.42 23.399-50.42 51.467 0 14.011 5.597 26.713 14.68 35.993 8.195 5.5 18.06 8.707 28.673 8.707 28.445 0 51.505-23.048 51.505-51.479z"
      />
      <path
        fill="#69c9d0"
        d="M191.844 64.902v-5.928a38.84 38.84 0 0 1-20.617-5.887 38.948 38.948 0 0 0 20.617 11.815zM153.439 26.78a39.524 39.524 0 0 1-.427-3.198V20h-28.028v111.24c-.045 12.967-10.574 23.467-23.56 23.467-3.813 0-7.412-.904-10.6-2.512 4.305 5.647 11.103 9.292 18.755 9.292 12.984 0 23.515-10.5 23.561-23.468V26.78zm-44.864 59.773v-6.311a51.97 51.97 0 0 0-7.067-.479C73.06 79.763 50 102.811 50 131.24c0 17.824 9.063 33.532 22.835 42.772-9.083-9.28-14.68-21.982-14.68-35.993 0-28.067 22.474-50.889 50.42-51.466z"
      />
      <path
        fill="#fff"
        d="M154.904 230c7.607 0 13.775-6.117 13.775-13.662s-6.168-13.663-13.775-13.663h-.188c-7.607 0-13.774 6.118-13.774 13.663S147.109 230 154.716 230zm-6.792-13.662c0-3.67 3-6.643 6.7-6.643 3.697 0 6.697 2.973 6.697 6.643s-3 6.645-6.697 6.645c-3.7-.001-6.7-2.975-6.7-6.645z"
      />
    </g>
  </svg>
);

export const Instagram: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 32 32"
    {...rest}
    className={`${className} w-full h-full`}
  >
    <rect width={28} height={28} x={2} y={2} fill="url(#a)" rx={6} />
    <rect width={28} height={28} x={2} y={2} fill="url(#b)" rx={6} />
    <rect width={28} height={28} x={2} y={2} fill="url(#c)" rx={6} />
    <path fill="#fff" d="M23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C6 21.44 6 19.76 6 16.4v-.8ZM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 0 1 1.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 0 1-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 0 1-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 0 1 1.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076Z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-55.376 27.916 .066) scale(25.5196)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B13589" />
        <stop offset={0.793} stopColor="#C62F94" />
        <stop offset={1} stopColor="#8A3AC8" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-65.136 29.766 6.89) scale(22.5942)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E8B7" />
        <stop offset={0.445} stopColor="#FB8A2E" />
        <stop offset={0.715} stopColor="#E2425C" />
        <stop offset={1} stopColor="#E2425C" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.157} stopColor="#406ADC" />
        <stop offset={0.468} stopColor="#6A45BE" />
        <stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

export const WhatsApp: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="WhatsApp"
    viewBox="0 0 512 512"
    {...rest}
    className={`${className} w-full h-full`}
  >
    <rect width={512} height={512} fill="#25d366" rx="15%" />
    <path
      fill="#25d366"
      stroke="#fff"
      strokeWidth={26}
      d="m123 393 14-65a138 138 0 1 1 50 47z"
    />
    <path
      fill="#fff"
      d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
    />
  </svg>
);

export const Gmail: React.FC<IIcon> = ({ className = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Gmail"
    viewBox="0 0 512 512"
    {...rest}
    className={`${className} w-full h-full`}
  >
    <rect width={512} height={512} fill="#fff" rx="15%" />
    <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
    <path fillOpacity={0.05} d="M256 285 120 392l-4-212" />
    <path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z" />
    <path fillOpacity={0.08} d="M317 392h77V159H82" />
    <path fill="#f2f2f2" d="M97 121h318L256 234" />
    <path fill="#b63524" d="M392 392h23c12 0 22-10 22-23V143h-45z" />
    <path
      fill="none"
      stroke="#de5145"
      strokeLinecap="round"
      strokeWidth={44}
      d="m97 143 159 115 159-115"
    />
  </svg>
);
