type ItemCardGridType = {
    cols: number
    rows: number
    img: string
    reverse?: boolean
    bgClass?: string
    bgColor?: string
    textColor?: string
}

export const gridDataStore: ItemCardGridType[] = [
    {
        cols: 1,
        rows: 2,
        img: 'bg-1.jpg'
    },
    {
        cols: 1,
        rows: 1,
        reverse: false,
        bgClass: 'bg-card-1',
        img: 'card-1.jpg',
        bgColor: 'bg-[#107c10]'
    },
    {
        cols: 1,
        rows: 2,
        img: 'bg-2.jpg'
    },
    {
        cols: 1,
        rows: 1,
        reverse: true,
        bgClass: 'bg-card-2',
        img: 'card-2.jpg',
        bgColor: 'bg-[#107c10]'
    },
    {
        cols: 1,
        rows: 1,
        reverse: false,
        bgClass: 'bg-card-3',
        img: 'card-3.jpg',
        bgColor: 'bg-[#107c10]'
    },
    {
        cols: 1,
        rows: 1,
        reverse: false,
        bgClass: 'bg-card-5',
        img: 'card-5.jpg',
        bgColor: 'bg-[#107c10]'
    },
    {
        cols: 2,
        rows: 2,
        img: 'bg-5.jpg'
    },
    {
        cols: 1,
        rows: 1,
        reverse: false,
        bgClass: 'bg-card-6',
        img: 'card-6.jpg',
        bgColor: 'bg-[#107c10]'
    },
    {
        cols: 1,
        rows: 1,
        reverse: false,
        bgClass: 'bg-card-7',
        img: 'card-7.jpg',
        bgColor: 'bg-[#107c10]'
    },
    {
        cols: 1,
        rows: 1,
        reverse: true,
        textColor:'text-slate-700',
        bgClass: 'bg-card-8',
        img: 'card-8.jpg',
        bgColor: 'bg-slate-50'
    },
    {
        cols: 1,
        rows: 2,
        img: 'bg-3.jpg'
    },
    {
        cols: 1,
        rows: 2,
        img: 'bg-4.jpg'
    },
    {
        cols: 1,
        rows: 1,
        reverse: false,
        textColor:'text-slate-700',
        bgClass: 'bg-card-9',
        img: 'card-9.jpg',
        bgColor: 'bg-slate-50'
    }
]