const VolumeIcon = ({size, color, strokeWidth}) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="1 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />

        <g id="Complete">
          <g id="volume-off">
            <g>
              <line
                fill="none"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={strokeWidth}
                x1="3"
                x2="21"
                y1="3"
                y2="21"
              />

              <polyline
                fill="none"
                points="9.9 5.5 12 3 12 21 7 16 2 16 2 9 3 9 7 9 8 9"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={strokeWidth}
              />

              <path
                d="M21.4,16a8.5,8.5,0,0,0,1.1-4.2c0-4.3-3.1-7.8-7-7.8"
                fill="none"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={strokeWidth}
              />

              <path
                d="M15.5,20.5a5.2,5.2,0,0,0,3-1"
                fill="none"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={strokeWidth}
              />

              <path
                d="M18.3,13a2.7,2.7,0,0,0,.2-1.1,2.9,2.9,0,0,0-3-2.9"
                fill="none"
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={strokeWidth}
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default VolumeIcon;
