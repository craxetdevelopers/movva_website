export interface PayoutResponse {
    meta: PaginationMeta;
    data: Withdrawal[];
  };
  

export interface PaginationMeta  {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    previous_page_url: string | null;
  };

export interface Withdrawal {
    id: string;
    user_id: string;
    amount: string;
    status: string;
    method: string;
    comment: string | null;
    withdrawal_date: string | null;
    created_at: string;
    updated_at: string;
    user: PayoutUser;
  };


export interface PayoutUser  {
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
    status: string;
    type: string;
    otp_expiry: string | null;
    reset_token_expiry: string | null;
    email_verified: number;
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
    admin_confirmed: number;
    verification_type: string | null;
    verification_status: string | null;
    verification_document_url: string | null;
    verification_payload: string | null;
    device_token: string | null;
  };