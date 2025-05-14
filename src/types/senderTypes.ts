export interface SenderResponse {
    meta: SenderMeta;
    data: SenderTable[];
  }


export interface SenderMeta {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    previous_page_url: string | null;
  }
  
  export interface SenderTable {
    id: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    photo: string | null;
    email: string;
    phone_number: string;
    date_of_birth: string;
    gender: "Male" | "Female" | string;
    marital_status: string | null;
    employment_status: string | null;
    national_id: string | null;
    country: string;
    city: string;
    state: string;
    residential_address: string;
    profession: string | null;
    status: "pending" | "active" | "inactive" | string;
    type: "user" | "admin" | string;
    otp_expiry: string | null;
    reset_token_expiry: string | null;
    email_verified: 0 | 1;
    created_at: string;
    updated_at: string;
    profile_language: string;
    id_card_type: string;
    id_card_number: string;
    id_card_photo: string | null;
    next_of_kin_name: string;
    next_of_kin_phone: string;
    next_of_kin_address: string;
    next_of_kin_relation: string;
    bank_name: string;
    bank_account_number: string;
    bvn: string;
    admin_confirmed: 0 | 1;
  }
  

  export interface SenderDeliveriesResponse {
    message: string;
    user: SenderProfileDetails;
    deliveries: Deliveries;
  }

  export interface Deliveries {
    meta: SenderDeliveriesMeta;
    data: SenderDelivery[];
  }


  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface SenderDelivery {}
  
  export interface SenderProfileDetails {
    id: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    photo: string | null;
    email: string;
    phone_number: string;
    date_of_birth: string;
    gender: "Male" | "Female" | string;
    marital_status: string | null;
    employment_status: string | null;
    national_id: string | null;
    country: string;
    city: string;
    state: string;
    residential_address: string;
    profession: string | null;
    status: "pending" | "active" | "inactive" | string;
    type: "user" | "admin" | string;
    otp_expiry: string | null;
    reset_token_expiry: string | null;
    email_verified: 0 | 1;
    created_at: string;
    updated_at: string;
    profile_language: string;
    id_card_type: string;
    id_card_number: string;
    id_card_photo: string | null;
    next_of_kin_name: string;
    next_of_kin_phone: string;
    next_of_kin_address: string;
    next_of_kin_relation: string;
    bank_name: string;
    bank_account_number: string;
    bvn: string;
    admin_confirmed: 0 | 1;
  }

  export interface SenderDeliveriesMeta {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    previous_page_url: string | null;
  }
  
  