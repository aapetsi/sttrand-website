import Head from 'next/head'
import Image from 'next/image'
import analytics from '../images/Group 5562@2x.png'
import imageOne from '../images/image1.png'
import imageTwo from '../images/image2.png'
import imageThree from '../images/image3.png'
import appStore from '../images/appstore.png'
import googlePlayStore from '../images/googlePlayStore.png'
import homeImage from '../images/Image 3.png'
import products from '../images/Screen Shot 2022-07-13 at 11.02.15 PM@2x.png'
import pathSvg from '../images/Path 5476.svg'
// import styles from '../styles/Home.module.css'

const AppStoreSvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width ? props.width : 228.358}
    height={props.height ? props.height : 65.515}
    {...props}
  >
    <path
      data-name='Path 2302'
      d='M228.358 58.948a6.568 6.568 0 0 1-6.576 6.567H6.584A6.577 6.577 0 0 1 0 58.948V6.576A6.585 6.585 0 0 1 6.584 0h215.2a6.575 6.575 0 0 1 6.576 6.576v52.372Z'
      fill='#fff'
    />
    <path
      data-name='Path 2304'
      d='M228.358 58.948a6.568 6.568 0 0 1-6.576 6.567H6.584A6.577 6.577 0 0 1 0 58.948V6.576A6.585 6.585 0 0 1 6.584 0h215.2a6.575 6.575 0 0 1 6.576 6.576v52.372Z'
    />
    <path
      data-name='Path 2305'
      d='M50.147 32.397a9.939 9.939 0 0 1 4.736-8.34 10.184 10.184 0 0 0-8.02-4.335c-3.374-.355-6.646 2.018-8.365 2.018-1.753 0-4.4-1.984-7.252-1.926a10.678 10.678 0 0 0-8.987 5.48c-3.887 6.727-.988 16.612 2.736 22.049 1.863 2.665 4.039 5.636 6.888 5.532 2.787-.113 3.828-1.775 7.192-1.775 3.333 0 4.31 1.775 7.216 1.708 2.991-.046 4.874-2.675 6.672-5.362a21.977 21.977 0 0 0 3.055-6.211 9.617 9.617 0 0 1-5.871-8.838Zm-5.488-16.252a9.782 9.782 0 0 0 2.24-7.011 9.97 9.97 0 0 0-6.446 3.333 9.309 9.309 0 0 0-2.3 6.752 8.235 8.235 0 0 0 6.506-3.074Z'
      fill='#fff'
    />
    <g data-name='Group 5538'>
      <path
        data-name='Path 2307'
        d='M90.516 52.494h-3.9l-2.134-6.7h-7.416l-2.032 6.7h-3.792l7.349-22.819h4.544l7.382 22.819Zm-6.672-9.515-1.929-5.958q-.306-.913-1.151-4.3h-.069q-.34 1.456-1.084 4.3l-1.9 5.959Zm25.535 1.085a9.316 9.316 0 0 1-2.281 6.634 6.689 6.689 0 0 1-5.073 2.167 5.079 5.079 0 0 1-4.7-2.334v8.633h-3.657V41.448q0-2.636-.135-5.408h3.216l.2 2.608h.069a6.506 6.506 0 0 1 10.417-.647 9.1 9.1 0 0 1 1.945 6.063Zm-3.725.134a6.782 6.782 0 0 0-1.084-3.963 3.747 3.747 0 0 0-3.183-1.624 3.8 3.8 0 0 0-2.454.9 4.159 4.159 0 0 0-1.439 2.354 4.771 4.771 0 0 0-.17 1.113v2.743a4.4 4.4 0 0 0 1.1 3.032 3.656 3.656 0 0 0 2.861 1.236 3.748 3.748 0 0 0 3.216-1.591 7 7 0 0 0 1.153-4.2Zm22.655-.134a9.316 9.316 0 0 1-2.281 6.634 6.693 6.693 0 0 1-5.075 2.167 5.079 5.079 0 0 1-4.7-2.334v8.633h-3.657V41.448q0-2.636-.135-5.408h3.216l.2 2.608h.069a6.508 6.508 0 0 1 10.414-.646 9.106 9.106 0 0 1 1.95 6.062Zm-3.727.134a6.783 6.783 0 0 0-1.086-3.963 3.741 3.741 0 0 0-3.18-1.624 3.819 3.819 0 0 0-2.458.9 4.157 4.157 0 0 0-1.437 2.354 4.882 4.882 0 0 0-.172 1.113v2.743a4.416 4.416 0 0 0 1.1 3.032 3.663 3.663 0 0 0 2.864 1.236 3.744 3.744 0 0 0 3.222-1.592 7 7 0 0 0 1.148-4.199Zm24.892 1.895a6.1 6.1 0 0 1-2.029 4.741 9 9 0 0 1-6.217 2 10.855 10.855 0 0 1-5.91-1.421l.846-3.047a10.175 10.175 0 0 0 5.283 1.423 4.985 4.985 0 0 0 3.216-.931 3.041 3.041 0 0 0 1.154-2.486 3.186 3.186 0 0 0-.95-2.337 8.81 8.81 0 0 0-3.149-1.759q-5.994-2.235-6-6.536a5.771 5.771 0 0 1 2.116-4.6 8.371 8.371 0 0 1 5.605-1.8 11.079 11.079 0 0 1 5.181 1.084l-.918 2.98a9.061 9.061 0 0 0-4.386-1.049 4.46 4.46 0 0 0-3.026.948 2.713 2.713 0 0 0-.918 2.068 2.794 2.794 0 0 0 1.051 2.234 11.844 11.844 0 0 0 3.317 1.759 11.247 11.247 0 0 1 4.334 2.774 5.782 5.782 0 0 1 1.401 3.955Zm12.121-7.31h-4.03v7.989q0 3.048 2.134 3.045a6.425 6.425 0 0 0 1.624-.17l.1 2.776a8.286 8.286 0 0 1-2.844.4 4.383 4.383 0 0 1-3.387-1.322q-1.217-1.322-1.219-4.436v-8.289h-2.4v-2.743h2.4v-3.012l3.592-1.084v4.1h4.031Zm18.15 5.348a9.025 9.025 0 0 1-2.168 6.23 7.729 7.729 0 0 1-6.027 2.505 7.368 7.368 0 0 1-5.775-2.4 8.751 8.751 0 0 1-2.151-6.06 8.951 8.951 0 0 1 2.218-6.262 7.688 7.688 0 0 1 5.979-2.438 7.522 7.522 0 0 1 5.823 2.4 8.637 8.637 0 0 1 2.101 6.025Zm-3.791.084a7.366 7.366 0 0 0-.979-3.882 3.62 3.62 0 0 0-3.286-1.96 3.672 3.672 0 0 0-3.353 1.96 7.489 7.489 0 0 0-.981 3.951 7.345 7.345 0 0 0 .981 3.884 3.75 3.75 0 0 0 6.608-.033 7.4 7.4 0 0 0 1.011-3.92Zm15.681-4.96a6.367 6.367 0 0 0-1.153-.1 3.451 3.451 0 0 0-2.981 1.457 5.489 5.489 0 0 0-.912 3.249v8.634h-3.654V41.221q0-2.591-.106-5.18h3.185l.134 3.148h.1a5.644 5.644 0 0 1 1.828-2.608 4.423 4.423 0 0 1 2.643-.881 5.87 5.87 0 0 1 .914.067Zm16.354 4.234a8.574 8.574 0 0 1-.134 1.658h-10.97a4.771 4.771 0 0 0 1.592 3.728 5.443 5.443 0 0 0 3.588 1.149 12.136 12.136 0 0 0 4.439-.777l.573 2.536a13.726 13.726 0 0 1-5.518 1.017 8 8 0 0 1-6.013-2.25 8.317 8.317 0 0 1-2.183-6.043 9.424 9.424 0 0 1 2.034-6.193 7.009 7.009 0 0 1 5.754-2.639 6.134 6.134 0 0 1 5.387 2.639 8.879 8.879 0 0 1 1.452 5.174Zm-3.487-.948a4.948 4.948 0 0 0-.71-2.81 3.193 3.193 0 0 0-2.912-1.526 3.467 3.467 0 0 0-2.911 1.49 5.46 5.46 0 0 0-1.082 2.843Z'
        fill='#fff'
      />
    </g>
    <g data-name='Group 5539'>
      <path
        data-name='Path 2308'
        d='M76.018 21.607a23.356 23.356 0 0 1-2.629-.134V10.441a19.911 19.911 0 0 1 3.1-.233c4.194 0 6.125 2.063 6.125 5.425-.005 3.878-2.286 5.974-6.596 5.974Zm.614-9.985a7.337 7.337 0 0 0-1.448.117v8.387a9.492 9.492 0 0 0 1.214.05c2.748 0 4.312-1.564 4.312-4.493 0-2.612-1.415-4.061-4.078-4.061Zm12 10.069a3.849 3.849 0 0 1-3.9-4.16 3.939 3.939 0 0 1 4.029-4.276 3.819 3.819 0 0 1 3.9 4.144 3.962 3.962 0 0 1-4.029 4.292Zm.069-7.123c-1.3 0-2.13 1.214-2.13 2.912 0 1.665.849 2.879 2.113 2.879s2.113-1.3 2.113-2.913c-.005-1.647-.837-2.878-2.101-2.878Zm17.438-1.147-2.53 8.087h-1.648l-1.053-3.517a26.63 26.63 0 0 1-.65-2.611h-.034a17.506 17.506 0 0 1-.648 2.611l-1.115 3.512h-1.665l-2.381-8.087h1.847l.916 3.844q.324 1.373.549 2.6h.034c.132-.681.348-1.531.665-2.579l1.149-3.86h1.465l1.1 3.777c.266.916.482 1.814.65 2.663h.048a23.253 23.253 0 0 1 .549-2.663l.983-3.777h1.765Zm9.313 8.087h-1.8v-4.644c0-1.43-.549-2.147-1.631-2.147a1.867 1.867 0 0 0-1.8 1.98v4.81h-1.8v-5.775c0-.715-.017-1.481-.067-2.313h1.581l.084 1.248h.05a2.906 2.906 0 0 1 2.564-1.413c1.7 0 2.813 1.3 2.813 3.411Zm4.957 0h-1.8v-11.8h1.8Zm6.554.183a3.85 3.85 0 0 1-3.9-4.16 3.938 3.938 0 0 1 4.027-4.276 3.818 3.818 0 0 1 3.9 4.144 3.961 3.961 0 0 1-4.027 4.292Zm.067-7.123c-1.3 0-2.13 1.214-2.13 2.912 0 1.665.851 2.879 2.111 2.879s2.113-1.3 2.113-2.913c0-1.646-.828-2.877-2.094-2.877Zm11.047 6.939-.13-.931h-.048a2.762 2.762 0 0 1-2.365 1.115 2.351 2.351 0 0 1-2.478-2.38c0-2 1.731-3.028 4.727-3.028v-.149c0-1.065-.564-1.6-1.679-1.6a3.786 3.786 0 0 0-2.113.6l-.365-1.181a5.171 5.171 0 0 1 2.777-.7c2.113 0 3.18 1.115 3.18 3.345v2.978a12.209 12.209 0 0 0 .117 1.931h-1.621Zm-.247-4.028c-2 0-3 .484-3 1.631a1.146 1.146 0 0 0 1.233 1.264 1.721 1.721 0 0 0 1.765-1.646Zm10.48 4.028-.084-1.3h-.05a2.712 2.712 0 0 1-2.6 1.481c-1.95 0-3.394-1.715-3.394-4.127 0-2.529 1.5-4.311 3.542-4.311a2.431 2.431 0 0 1 2.281 1.1h.036V9.71h1.8v9.618c0 .782.019 1.514.067 2.179Zm-.266-4.758a1.956 1.956 0 0 0-1.894-2.1c-1.333 0-2.147 1.181-2.147 2.845 0 1.631.846 2.747 2.111 2.747a2.018 2.018 0 0 0 1.93-2.147v-1.345Zm13.201 4.942a3.849 3.849 0 0 1-3.893-4.16 3.938 3.938 0 0 1 4.027-4.276 3.818 3.818 0 0 1 3.9 4.144 3.96 3.96 0 0 1-4.029 4.292Zm.067-7.123c-1.3 0-2.128 1.214-2.128 2.912 0 1.665.849 2.879 2.111 2.879s2.113-1.3 2.113-2.913c.003-1.647-.826-2.878-2.096-2.878Zm13.629 6.939h-1.8v-4.643c0-1.43-.549-2.147-1.631-2.147a1.865 1.865 0 0 0-1.8 1.98v4.81h-1.8v-5.775c0-.715-.017-1.481-.067-2.313h1.581l.084 1.248h.05a2.9 2.9 0 0 1 2.562-1.415c1.7 0 2.815 1.3 2.815 3.411Zm12.093-6.739h-1.978v3.923c0 1 .346 1.5 1.046 1.5a3.541 3.541 0 0 0 .8-.084l.05 1.365a3.983 3.983 0 0 1-1.394.2c-1.417 0-2.264-.782-2.264-2.829v-4.074h-1.18v-1.348h1.18v-1.482l1.765-.533v2.013h1.978Zm9.516 6.739h-1.8v-4.609c0-1.447-.547-2.179-1.631-2.179a1.763 1.763 0 0 0-1.8 1.914v4.875h-1.8v-11.8h1.8v4.858h.036a2.727 2.727 0 0 1 2.432-1.315c1.712 0 2.758 1.331 2.758 3.445Zm9.749-3.611h-5.394a2.321 2.321 0 0 0 2.549 2.4 6.075 6.075 0 0 0 2.18-.382l.28 1.248a6.754 6.754 0 0 1-2.713.5 3.754 3.754 0 0 1-4.027-4.076c0-2.479 1.533-4.343 3.825-4.343 2.067 0 3.363 1.531 3.363 3.844a3.459 3.459 0 0 1-.062.814Zm-1.648-1.281c0-1.248-.629-2.13-1.779-2.13a2.132 2.132 0 0 0-1.966 2.13h3.744Z'
        fill='#fff'
      />
    </g>
  </svg>
)

const PlayStoreSvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width ? props.width : 221.115}
    height={props.height ? props.height : 65.516}
    {...props}
  >
    <defs>
      <linearGradient
        id='a'
        x1={0.908}
        y1={1.032}
        x2={-0.383}
        y2={0.36}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#00a0ff' />
        <stop offset={0.007} stopColor='#00a1ff' />
        <stop offset={0.26} stopColor='#00beff' />
        <stop offset={0.512} stopColor='#00d2ff' />
        <stop offset={0.76} stopColor='#00dfff' />
        <stop offset={1} stopColor='#00e3ff' />
      </linearGradient>
      <linearGradient
        id='b'
        x1={1.077}
        y1={0.729}
        x2={-1.307}
        y2={0.729}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#ffe000' />
        <stop offset={0.409} stopColor='#ffbd00' />
        <stop offset={0.775} stopColor='orange' />
        <stop offset={1} stopColor='#ff9c00' />
      </linearGradient>
      <linearGradient
        id='c'
        x1={0.864}
        y1={-0.023}
        x2={-0.499}
        y2={-1.789}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#ff3a44' />
        <stop offset={1} stopColor='#c31162' />
      </linearGradient>
      <linearGradient
        id='d'
        x1={-0.186}
        y1={2.701}
        x2={0.423}
        y2={1.909}
        gradientUnits='objectBoundingBox'
      >
        <stop offset={0} stopColor='#32a071' />
        <stop offset={0.069} stopColor='#2da771' />
        <stop offset={0.476} stopColor='#15cf74' />
        <stop offset={0.801} stopColor='#06e775' />
        <stop offset={1} stopColor='#00f076' />
      </linearGradient>
    </defs>
    <path
      data-name='Path 2309'
      d='M212.925 65.516H8.189A8.11 8.11 0 0 1 0 57.326V8.189A8.11 8.11 0 0 1 8.189 0h204.736a8.11 8.11 0 0 1 8.189 8.189v49.137a8.11 8.11 0 0 1-8.189 8.19Z'
    />
    <path
      data-name='Path 2311'
      d='M77.635 16.706a4.461 4.461 0 0 1-1.147 3.276 5.141 5.141 0 0 1-7.207 0 4.816 4.816 0 0 1-1.474-3.6 4.816 4.816 0 0 1 1.474-3.6 4.816 4.816 0 0 1 3.6-1.474 4.361 4.361 0 0 1 1.965.491 3.567 3.567 0 0 1 1.474 1.147l-.819.819a3.054 3.054 0 0 0-2.616-1.154 3.259 3.259 0 0 0-2.621 1.147 3.374 3.374 0 0 0-1.147 2.784 3.374 3.374 0 0 0 1.147 2.784 4.217 4.217 0 0 0 2.621 1.147 3.592 3.592 0 0 0 2.784-1.147 2.712 2.712 0 0 0 .819-1.965h-3.6v-1.31h4.75v.655Zm7.535-4.095h-4.423v3.112h4.095v1.147h-4.095v3.112h4.422v1.31h-5.732v-9.827h5.733Zm5.405 8.681h-1.31v-8.681H86.48v-1.146h6.879v1.146h-2.784Zm7.534 0v-9.827h1.31v9.827Zm6.879 0h-1.31v-8.681h-2.785v-1.146h6.715v1.146h-2.784v8.681Zm15.56-1.31a5.141 5.141 0 0 1-7.207 0 4.816 4.816 0 0 1-1.474-3.6 4.816 4.816 0 0 1 1.474-3.6 5.141 5.141 0 0 1 7.207 0 4.816 4.816 0 0 1 1.474 3.6 4.816 4.816 0 0 1-1.474 3.6Zm-6.224-.819a3.865 3.865 0 0 0 2.621 1.147 3.259 3.259 0 0 0 2.621-1.147 3.951 3.951 0 0 0 1.142-2.785 3.374 3.374 0 0 0-1.146-2.784 3.865 3.865 0 0 0-2.621-1.147 3.259 3.259 0 0 0-2.621 1.147 3.951 3.951 0 0 0-1.147 2.784 3.374 3.374 0 0 0 1.151 2.785Zm9.5 2.129v-9.827h1.474l4.75 7.7v-7.7h1.31v9.827h-1.31l-5.078-8.026v8.026h-1.146Z'
      fill='#fff'
      stroke='#fff'
      strokeWidth={0.2}
    />
    <path
      data-name='Path 2312'
      d='M111.54 35.708a6.891 6.891 0 0 0-7.043 7.043 6.991 6.991 0 0 0 7.043 7.043 6.891 6.891 0 0 0 7.043-7.043 6.8 6.8 0 0 0-7.043-7.043Zm0 11.138a4.066 4.066 0 0 1-3.931-4.259 4.066 4.066 0 0 1 3.931-4.259 3.968 3.968 0 0 1 3.931 4.259 4.066 4.066 0 0 1-3.931 4.257ZM96.308 35.708a6.891 6.891 0 0 0-7.043 7.043 6.991 6.991 0 0 0 7.043 7.043 6.891 6.891 0 0 0 7.043-7.043 6.8 6.8 0 0 0-7.043-7.043Zm0 11.138a4.066 4.066 0 0 1-3.931-4.259 4.066 4.066 0 0 1 3.931-4.259 3.968 3.968 0 0 1 3.931 4.259 4.066 4.066 0 0 1-3.931 4.257Zm-18.181-9.011v2.948h7.043a6.193 6.193 0 0 1-1.638 3.767 7.25 7.25 0 0 1-5.405 2.129 7.626 7.626 0 0 1-7.7-7.862 7.726 7.726 0 0 1 7.7-7.862 8.121 8.121 0 0 1 5.405 2.129l2.129-2.129a10.5 10.5 0 0 0-7.37-2.948 11.049 11.049 0 0 0-10.974 10.811 11.049 11.049 0 0 0 10.974 10.81 9.426 9.426 0 0 0 7.534-3.112 9.86 9.86 0 0 0 2.621-6.879 6.142 6.142 0 0 0-.164-1.8H78.127Zm74.36 2.293a6.364 6.364 0 0 0-5.9-4.422c-3.6 0-6.552 2.784-6.552 7.043a6.854 6.854 0 0 0 6.879 7.043 6.719 6.719 0 0 0 5.733-3.112l-2.293-1.638a3.992 3.992 0 0 1-3.437 1.966 3.554 3.554 0 0 1-3.44-2.129l9.336-3.931-.328-.819Zm-9.5 2.293a3.979 3.979 0 0 1 3.6-4.095 2.9 2.9 0 0 1 2.621 1.474l-6.224 2.621Zm-7.7 6.715h3.112V28.663h-3.112Zm-4.914-11.957a5.393 5.393 0 0 0-3.767-1.638 7.038 7.038 0 0 0-6.715 7.043 6.782 6.782 0 0 0 6.715 6.879 4.7 4.7 0 0 0 3.6-1.638h.164v.983c0 2.621-1.474 4.095-3.767 4.095a3.639 3.639 0 0 1-3.44-2.457l-2.621 1.147a6.757 6.757 0 0 0 6.224 4.095c3.6 0 6.552-2.129 6.552-7.207V36.034h-2.948v1.147Zm-3.6 9.664a4.066 4.066 0 0 1-3.931-4.259 4.066 4.066 0 0 1 3.931-4.259c2.129 0 3.767 1.8 3.767 4.259s-1.639 4.26-3.768 4.26Zm39.964-18.18h-7.37v20.474h3.112v-7.7h4.258a6.4 6.4 0 1 0 0-12.776Zm.164 9.827h-4.422v-7.042h4.422a3.6 3.6 0 0 1 3.6 3.44 3.748 3.748 0 0 1-3.601 3.602Zm18.836-2.948c-2.293 0-4.586.983-5.405 3.112l2.784 1.147a2.893 2.893 0 0 1 2.784-1.474 3.078 3.078 0 0 1 3.276 2.621v.16a6.5 6.5 0 0 0-3.112-.819c-2.948 0-5.9 1.638-5.9 4.586 0 2.784 2.457 4.586 5.077 4.586a4.609 4.609 0 0 0 3.931-1.965h.164v1.638h2.948v-7.859a6.2 6.2 0 0 0-6.552-5.733Zm-.328 11.3c-.983 0-2.457-.491-2.457-1.8 0-1.638 1.8-2.129 3.276-2.129a6.334 6.334 0 0 1 2.784.655 3.815 3.815 0 0 1-3.603 3.276Zm17.2-10.81-3.44 8.845h-.164l-3.6-8.845h-3.276l5.4 12.448-3.112 6.881h3.112l8.353-19.327Zm-27.516 13.1h3.112V28.663h-3.112Z'
      fill='#fff'
    />
    <g data-name='Group 5540'>
      <path
        data-name='Path 2313'
        d='M10.655 7.5A3.2 3.2 0 0 0 10 9.793v36.2a3.24 3.24 0 0 0 .819 2.293l.164.164 20.31-20.31v-.33Z'
        transform='translate(6.379 4.784)'
        fill='url(#a)'
      />
      <path
        data-name='Path 2314'
        d='M29.615 29.722 22.9 23.007v-.491l6.715-6.716.164.164L37.8 20.55c2.293 1.31 2.293 3.44 0 4.75Z'
        transform='translate(14.608 10.078)'
        fill='url(#b)'
      />
      <path
        data-name='Path 2315'
        d='M37.753 26.879 30.874 20 10.4 40.474c.819.819 1.965.819 3.44.164l23.913-13.759'
        transform='translate(6.634 12.757)'
        fill='url(#c)'
      />
      <path
        data-name='Path 2316'
        d='M37.753 21.3 13.84 7.71c-1.474-.819-2.621-.655-3.44.164l20.474 20.31 6.879-6.884Z'
        transform='translate(6.634 4.574)'
        fill='url(#d)'
      />
      <path
        data-name='Path 2317'
        d='M44.223 39.473 20.474 52.904a2.679 2.679 0 0 1-3.276 0l-.164.164.164.164a2.679 2.679 0 0 0 3.276 0Z'
        opacity={0.2}
      />
      <path
        data-name='Path 2318'
        d='M17.034 52.903a3.2 3.2 0 0 1-.655-2.293v.164a3.24 3.24 0 0 0 .819 2.293v-.164h-.164Zm35.378-18.017-8.189 4.586.164.164 8.026-4.586a2.723 2.723 0 0 0 1.637-2.293c0 .819-.655 1.474-1.638 2.129Z'
        opacity={0.12}
      />
      <path
        data-name='Path 2319'
        d='m20.474 12.448 31.938 18.18c.983.655 1.638 1.31 1.638 2.129a2.723 2.723 0 0 0-1.638-2.293l-31.938-18.18c-2.295-1.31-4.095-.325-4.095 2.293v.164c0-2.457 1.8-3.603 4.095-2.293Z'
        fill='#fff'
        opacity={0.25}
      />
    </g>
  </svg>
)

export default function Home() {
  return (
    <div>
      <h1 className='text-center font-bold mb-3'>
        <span className='text-light-blue'>Buy</span> together,
        <br /> Save together
      </h1>
      <p className='text-center text-sm w-2/3 mx-auto mb-6'>
        Realizing the power of community. Sttrand is the social commerce
        infrastructure for the continent of Africa.
      </p>

      <div className='flex justify-between w-2/3 mx-auto mb-6'>
        <div className='w-32'>
          <Image src={appStore} alt='apple store image' />
        </div>

        <div className='w-32'>
          <Image src={googlePlayStore} alt='google play store image' />
        </div>
      </div>

      <div className='mb-12'>
        <div className='bg-deep-blue rounded-full w-8 h-8 absolute top-[55%] ml-5'></div>
        <div className="bg-deep-blue ml-5 rounded-full w-[350px] h-[350px] absolute top-[60%]"></div>
        <div className='text-center'>
          <Image src={homeImage} alt='sttrand app home page' />
        </div>
      </div>

      <h1 className='text-center font-semibold mb-3'>A Platform Where Consumers<br /> can Utilize Social Apps to buy items<br/> at a Discount</h1>
      <p className='text-center w-2/3 mx-auto mb-3'>Consumers have the option to purchase everyday household items individually at a standard retail price or they can partner with a family/friend or other consumers on our platform to get a discounted price</p>

      <div className='bg-deep-blue flex flex-col justify-center text-center w-28 mx-auto h-10 mb-8 rounded-2xl'>
        <p className='text-white font-black text-sm'>Get the App</p>
      </div>

      <div>
        <h1 className='text-center font-bold mb-3'>
          Different Payment
          <br /> Options Accepted
        </h1>
        <p className='text-center text-xs mb-10'>
          Different Delivery Options Available
        </p>
        <div className='flex justify-between p-3 mb-6'>
          <span className='w-32'>
            <Image src={imageOne} alt='shopping cart items' />
          </span>
          <span className='-mt-8 w-32'>
            <Image src={imageTwo} alt='items checkout' />
          </span>
          <span className='w-32'>
            <Image src={imageThree} alt='successful order' />
          </span>
        </div>
      </div>

      <div className='bg-deep-blue'>
        <h1 className='text-center text-white font-semibold mb-6'>
          Become a Merchant
        </h1>
        <div className='bg-white w-1/3 mx-auto rounded-lg h-10 flex flex-col justify-center text-center mb-6'>
          <p>Learn more</p>
        </div>

        <div className='w-11/12 mx-auto mb-6'>
          <Image src={analytics} alt='analytics' />
        </div>

        <div className='w-11/12 mx-auto mb-8'>
          <Image src={products} alt='products' />
        </div>

        <div className='h-3 mb-10'></div>
      </div>
      {/* <div className='flex '>
        <div className='w-[483px] ml-[270px] mr-80 mt-32'>
          <h1 className='text-4xl font-bold tracking-wider'>
            Buy together,
            <br /> <span className='text-light-blue'>Save</span> together
          </h1>
          <p className='mb-5'>
            Realizing the power of community. Sttrand is the social commerce
            infrastructure for the continent of Africa
          </p>

        </div>
        <Image src={homeImage} />
      </div>

      <div className='mt-16'>
        <h1 className='text-center tracking-wide text-3xl font-black mb-6'>
          A Platform Where Consumers
          <br /> can Utilize Social Apps to buy Items
          <br /> at a Discount
        </h1>
        <p className='text-center tracking-wide text-xl mb-10'>
          Consumers have the option to purchase everyday household items
          individually at
          <br /> a standard retail price or they can partner with a
          family/firend or other
          <br /> consumers on our platform to get a discounted price.
        </p>
        <div className='text-center mb-10'>
          <button className='w-[200px] h-[60px] bg-deep-blue text-white rounded-lg'>
            Get the App
          </button>
        </div>
      </div>

      <div className='flex justify-center content-center mb-16'>
        <div className='mt-[250px]'>
          <h1 className='font-bold text-3xl tracking-wider'>
            Different
            <br /> Payment Options
            <br /> Accepted
          </h1>
          <p className='tracking-wider'>Different Delivery Options Available</p>
        </div>
        <div className='mr-4'>
          <Image
            src={imageOne}
            width='265px'
            height='582px'
            alt='analytics dashboard'
          />
        </div>
        <div className='mr-4'>
          <Image
            src={imageOne}
            width='265px'
            height='582px'
            alt='analytics dashboard'
          />
        </div>
        <div>
          <Image
            src={imageOne}
            width='265px'
            height='582px'
            alt='analytics dashboard'
          />
        </div>
      </div>

      <div className='bg-deep-blue'>
        <h1 className='text-center text-white pt-10 mb-6 text-4xl tracking-wider'>
          Become a Merchant
        </h1>
        <div className='text-center'>
          <button className='mx-auto rounded-lg bg-white w-[200px] h-[50px] mb-10'>
            Learn more
          </button>
        </div>
        <div className='ml-[300px] mb-10'>
          <Image
            src={analytics}
            width='1320px'
            height='800px'
            alt='analytics dashboard'
          />
        </div>
        <div className='ml-[300px] pb-24'>
          <Image
            src={products}
            width='1320px'
            height='800px'
            alt='products list'
          />
        </div>
      </div> */}
    </div>
  )
}