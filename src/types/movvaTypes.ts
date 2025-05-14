export type MovvaTable = {
    id: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    photo: string | null;
    email: string;
    phone_number: string;
    date_of_birth: string;
    gender: 'Male' | 'Female' | string;
    marital_status: string | null;
    employment_status: string | null;
    national_id: string | null;
    country: string;
    city: string;
    state: string;
    residential_address: string;
    profession: string | null;
    status: 'pending' | 'approved' | 'rejected' | string;
    type: 'mover' | 'admin' | string;
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
  };

  export interface MovvaDeliveryResponse {
    message: string;
    user: MovvaProfileDetails;
    deliveries: MovvaDeliveries;
  }

  export interface MovvaProfileDetails {
    id: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    photo: string | null;
    email: string;
    phone_number: string;
    date_of_birth: string | null;
    gender: string | null;
    marital_status: string | null;
    employment_status: string | null;
    national_id: string | null;
    country: string | null;
    city: string | null;
    state: string | null;
    residential_address: string | null;
    profession: string | null;
    status: "pending" | "approved" | "rejected"; 
    type: "mover"; 
    otp_expiry: string | null;
    reset_token_expiry: string | null;
    email_verified: 0 | 1;
    created_at: string;
    updated_at: string;
    profile_language: string | null;
    id_card_type: string | null;
    id_card_number: string | null;
    id_card_photo: string | null;
    next_of_kin_name: string | null;
    next_of_kin_phone: string | null;
    next_of_kin_address: string | null;
    next_of_kin_relation: string | null;
    bank_name: string | null;
    bank_account_number: string | null;
    bvn: string | null;
    admin_confirmed: 0 | 1;
  }

  export interface MovvaDeliveries {
    meta: DeliveriesMeta;
    data: MovvaDelivery[];
  }
  
  export interface DeliveriesMeta {
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
  
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface MovvaDelivery {}