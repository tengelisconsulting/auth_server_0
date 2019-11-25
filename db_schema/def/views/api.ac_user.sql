CREATE OR REPLACE VIEW api.ac_user
AS
  SELECT user_id,
         username,
         password_hash,
         created,
         updated
    FROM internal.ac_user
;
