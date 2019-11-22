DROP FUNCTION IF EXISTS api.check_username_password;
CREATE FUNCTION api.check_username_password(
  IN p_username    TEXT,
  IN p_password    TEXT
)
RETURNS BOOLEAN
AS $$
DECLARE
  v_pw_hash       api.ac_user.password_hash%TYPE;
BEGIN
  BEGIN
    SELECT password_hash
      INTO v_pw_hash
      FROM api.ac_user
     WHERE username = p_username
    ;
    EXCEPTION
      WHEN NO_DATA_FOUND THEN
       RETURN FALSE;
  END;
  RETURN v_pw_hash = crypt(
                       p_password,
                       v_pw_hash
                     );
END;
$$
LANGUAGE plpgsql
STABLE
;
