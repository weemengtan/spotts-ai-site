import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
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