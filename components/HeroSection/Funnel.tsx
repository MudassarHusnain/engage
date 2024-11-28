import { ResponsiveFunnel } from '@nivo/funnel'

const data = [
    {
      "id": "step_sent",
      "value": 61096,
      "label": "Sent"
    },
    {
      "id": "step_viewed",
      "value": 37858,
      "label": "Viewed"
    },
    {
      "id": "step_clicked",
      "value": 24136,
      "label": "Clicked"
    },
    {
      "id": "step_add_to_card",
      "value": 22392,
      "label": "Add To Card"
    },
    {
      "id": "step_purchased",
      "value": 19826,
      "label": "Purchased"
    }
  ]
const MyResponsiveFunnel = () => (
    <ResponsiveFunnel
        data={data}
        direction='horizontal'
        margin={{ top: 20, right: 20, bottom: 20 }}
        valueFormat=">-.4s"
        colors={{ scheme: 'spectral' }}
        borderWidth={20}
        colors={{ scheme: 'blues' }}
        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={80}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
)
export default MyResponsiveFunnel;