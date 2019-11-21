DROP FUNCTION IF EXISTS api.ac_add_user;
CREATE FUNCTION api.ac_add_user(
  IN   p_username      VARCHAR,
  IN   p_password      VARCHAR
)
RETURNS UUID
AS $$
DECLARE
  v_user_id     UUID    := uuid_generate_v1mc();
BEGIN
  INSERT
    INTO api.ac_user (
           user_id,
           username,
           password_hash
         )
  VALUES (
           v_user_id,
           p_username,
           crypt(p_password, gen_salt('bf'))
         )
  ;
  RETURN v_user_id;
END;
$$
LANGUAGE plpgsql;