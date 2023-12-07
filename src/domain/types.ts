interface DeliverReexaminationFTSItem {
  passenger: string
  baggageNum: string
  flightNum: string
  destination: string
  scheduleTime: string
  inspection: string
  estimateTime?: string
}

interface InviteToInspectionAreaItem {
  passenger: string
  flightNum: string
  destination: string
  scheduleTime: string
  estimateTime?: string
  status: string
}

interface ReturnReexaminationItem {
  passenger: string
  baggageNum: string
  flightNum: string
  destination: string
  scheduleTime: string
  inspection: string
  estimateTime?: string
  removed?: boolean
}

interface SubmitReexaminationItem {
  passenger: string
  baggageNum: string
  flightNum: string
  destination: string
  scheduleTime: string
  inspection: string
  estimateTime?: string
}

export type {
  DeliverReexaminationFTSItem,
  InviteToInspectionAreaItem,
  ReturnReexaminationItem,
  SubmitReexaminationItem,
};
