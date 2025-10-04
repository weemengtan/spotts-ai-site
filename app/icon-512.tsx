import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 360,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#06B6D4', // Turquoise color
          fontFamily: 'serif',
          fontWeight: '300',
          borderRadius: '50%',
        }}
      >
        s
      </div>
    ),
    {
      ...size,
    }
  );
}