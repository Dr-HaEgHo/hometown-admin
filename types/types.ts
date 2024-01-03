
export interface emailInputProps {
    label: string,
    placeholder: string,
    type: string
}

export interface pwInputProps {
    label: string,
    placeholder: string,
}

export interface dropDownProps {
    label: string,
    placeholder: string,
    type: string,
    data: {
        id: number,
        name: string
    }[]
}

export interface sidebarLink {
    id: number,
    title: String,
    route: String,
}

export interface incubateeData{
    name: string,
    LGA: string,
    phoneNumber: number,
    status: string,
    date: string,
    time: string
}