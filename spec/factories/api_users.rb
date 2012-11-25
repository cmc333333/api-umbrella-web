FactoryGirl.define do
  factory :api_user do
    first_name "Ambrose"
    last_name "Burnside"
    sequence(:email) { |n| "ambrose.burnside#{n}@example.com" }
    website "http://example.com/"
    terms_and_conditions "1"

    factory :invalid_api_user do
      terms_and_conditions ""
    end
  end
end