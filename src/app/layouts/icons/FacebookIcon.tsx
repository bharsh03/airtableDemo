interface FacebookIconProps {
  size?: number;
  className?: string;
}

const FacebookIcon = ({ size = 21, className = "" }: FacebookIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#fb_clip)">
        <mask id="fb_mask" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
          <path d="M0.449997 0.295898H16.45V16.2959H0.449997V0.295898Z" fill="white" />
        </mask>
        <g mask="url(#fb_mask)">
          <path d="M16.45 8.29611C16.4498 6.76732 16.0115 5.27061 15.187 3.98318C14.3626 2.69574 13.1865 1.67148 11.7981 1.03167C10.4096 0.391858 8.8669 0.16328 7.35256 0.372998C5.83823 0.582716 4.41569 1.22195 3.25337 2.21501C2.09104 3.20808 1.23759 4.5134 0.794066 5.97644C0.35054 7.43947 0.335506 8.99896 0.750745 10.4703C1.16598 11.9416 1.99411 13.2631 3.13707 14.2784C4.28004 15.2937 5.68999 15.9602 7.2 16.1991V10.6091H5.17V8.29511H7.2V6.53311C7.2 4.52811 8.395 3.42111 10.222 3.42111C11.097 3.42111 12.012 3.57711 12.012 3.57711V5.54611H11.004C10.01 5.54611 9.7 6.16211 9.7 6.79611V8.29611H11.919L11.564 10.6081H9.7V16.1981C11.5816 15.9 13.295 14.9405 14.5324 13.492C15.7697 12.0435 16.4497 10.2011 16.45 8.29611Z" fill="currentColor" />
          <path d="M11.564 10.6079L11.919 8.2959H9.7V6.7959C9.7 6.1629 10.01 5.5459 11.004 5.5459H12.013V3.5769C12.013 3.5769 11.097 3.4209 10.222 3.4209C8.395 3.4199 7.2 4.5279 7.2 6.5329V8.2959H5.17V10.6079H7.2V16.1979C8.029 16.3279 8.872 16.3279 9.7 16.1979V10.6079H11.564Z" fill="white" />
        </g>
      </g>
      <defs>
        <clipPath id="fb_clip">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FacebookIcon
