import { ResponsiveBullet } from '@nivo/bullet';
import { useEffect } from 'react';

interface BulletData {
  id: string;
  ranges: number[];
}

interface MyResponsiveBulletProps {
  data: BulletData[];
}
const leadStatistics = [
    {
      "id": "temp.",
      "ranges": [
        44
      ],
      "measures": [
        90
      ],
     
    },
    {
      "id": "power",
      "ranges": [
        0.9855063083851535,
        0.8087344431619289,
        0.4378300379205724,
        0,
        2
      ],
      "measures": [
        0.17838071955884155,
        0.8676674889867924
      ],
      "markers": [
        1.5416269507212905
      ]
    },
    {
      "id": "volume",
      "ranges": [
        3,
        46,
        14,
        33,
        3,
        54,
        0,
        60
      ],
      "measures": [
        25
      ],
      "markers": [
        54
      ]
    },
    {
      "id": "cost",
      "ranges": [
        368780,
        79867,
        215251,
        0,
        500000
      ],
      "measures": [
        408735,
        434234
      ],
      "markers": [
        409703
      ]
    },
    {
      "id": "revenue",
      "ranges": [
        0,
        8,
        1,
        0,
        9
      ],
      "measures": [
        1
      ],
      "markers": [
        7.8031047548854415,
        5.958047373886924
      ]
    }
  ]
const MyResponsiveBullet: React.FC<MyResponsiveBulletProps> = ({ data }) => {
  if (!data || data.length === 0) {
    console.error("Data is missing or empty");
    return <div>No data available</div>;
  }

  console.log("Data passed to MyResponsiveBullet:", data);
  useEffect(()=>{

  },[leadStatistics])
  return (
    <ResponsiveBullet
        data={leadStatistics}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
    />
  );
};

export default MyResponsiveBullet;
