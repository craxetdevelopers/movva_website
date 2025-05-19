import { MovvaProfileDetails } from "./movvaTypes";
import { SenderTable } from "./senderTypes";

export interface TripMeta {
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
  

  export interface TripItem {
    id: string;
    sender_id: string;
    mover_id: string;
    pickup_address: string;
    dropoff_address: string;
    pickup_instructions: string;
    weight: number;
    distance: number;
    price: number;
    status: string;
    accepted_at: string;
    sender_name: string;
    sender_phone: string;
    image_url: string | null;
    category: string; // You might want to parse this into string[]
    size: string;
    pickup_longitude: string;
    pickup_latitude: string;
    dropoff_longitude: string;
    dropoff_latitude: string;
    delivery_code: string;
    completion_code: string;
    created_at: string;
    updated_at: string;
    mover_acceptance_selfie: string;
    cancel_reason: string | null;
    cancel_by: string | null;
    mover: MovvaProfileDetails;
    sender: SenderTable;
  }

  export interface DeliveryResponse {
    meta: TripMeta;
    data: TripItem[];
  }