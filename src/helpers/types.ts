export type cache = {
    cacher: () => void
}

export type timme = {
    timme: (tab: string[], img: HTMLImageElement) => void
}

export interface user {
     id: number;
    username: string,
    full_name: string,
    profile_pic_url: string

}
type status = {
    id: number,
    img: string,
    message: string
    date: Date
}

export interface statusFriend{
    friend: user;
    status: status;
}