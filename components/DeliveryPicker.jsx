"use client";

export function isDeliveryTimeValid(value) {
  if (!value) return false;
  const selected = new Date(value);
  const minimum = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return selected >= minimum;
}

export default function DeliveryPicker({ value, onChange }) {
  const hasError = value && !isDeliveryTimeValid(value);

  return (
    <div>
      <label className="label" htmlFor="deliveryAt">
        Select Delivery Date & Time
      </label>
      <input
        id="deliveryAt"
        type="datetime-local"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field"
      />
      <p className="mt-2 text-sm text-textMuted">We need at least 24 hours to prepare your fresh order</p>
      {hasError && (
        <p className="mt-2 text-sm font-semibold text-error">
          Please select a delivery time at least 24 hours from now. We need time to bake your order fresh!
        </p>
      )}
    </div>
  );
}
