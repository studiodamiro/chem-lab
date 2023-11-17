export default function BadgeFlaskAngled({ color = 'white', className }) {
  return (
    <svg
      className={className}
      width='51'
      height='56'
      viewBox='0 0 51 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.7841 3.21275C11.7841 4.9871 13.2276 6.4255 15.0083 6.4255L15.0083 19.6666L1.07072 43.7216C-1.96495 48.9608 1.81551 55.5204 7.87071 55.5204L43.1293 55.5204C49.1845 55.5204 52.9649 48.9608 49.9293 43.7216L35.9917 19.6666V6.4255C37.7724 6.4255 39.2159 4.9871 39.2159 3.21275C39.2159 1.4384 37.7724 0 35.9917 0L15.0083 0C13.2276 0 11.7841 1.4384 11.7841 3.21275Z'
        fill={color}
        fillOpacity='0.3'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.1582 7.20202C25.1582 6.20701 24.3516 5.40039 23.3566 5.40039C22.3616 5.40039 21.555 6.20701 21.555 7.20202V21.4556L7.05773 46.308C6.55637 47.1675 6.84667 48.2707 7.70615 48.772C8.56562 49.2734 9.66879 48.9831 10.1702 48.1236L24.887 22.8947C25.0589 22.6187 25.1582 22.2927 25.1582 21.9436V7.20202Z'
        fill={color}
        fillOpacity='0.5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.6115 20.6351V3.60327H32.3885V20.6351L46.8115 45.528C48.4554 48.3651 46.4082 51.9172 43.1293 51.9172H7.87071C4.59232 51.9172 2.54531 48.3663 4.18764 45.5294H16.2353H16.2353C17.21 45.5294 18.0001 44.7393 18.0001 43.7647C18.0001 42.7901 17.21 42 16.2353 42H16.2353H6.2326L10.0953 35.3333H18.3333H18.3335C19.254 35.3333 20.0001 34.5871 20.0001 33.6667C20.0001 32.7462 19.254 32 18.3335 32H18.3333H12.0266L15.7928 25.5H20.25C21.2165 25.5 22 24.7165 22 23.75C22 22.7835 21.2165 22 20.25 22H17.8207L18.6115 20.6351ZM11.7841 3.21275C11.7841 4.9871 13.2276 6.4255 15.0083 6.4255V19.6666L1.07072 43.7216C-1.96495 48.9608 1.81551 55.5204 7.87071 55.5204L43.1293 55.5204C49.1845 55.5204 52.9649 48.9608 49.9293 43.7216L35.9917 19.6666V6.4255C37.7724 6.4255 39.2159 4.9871 39.2159 3.21275C39.2159 1.4384 37.7724 0 35.9917 0H15.0083C13.2276 0 11.7841 1.4384 11.7841 3.21275Z'
        fill={color}
      />
    </svg>
  );
}